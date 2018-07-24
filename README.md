# Mini Netcore Framework

You can invoke any method with Mini Netcore Framework.
Mini netcore framework, takes method as an parameter  then;

- Builds InvokeContext,
- Executes middleware classes such as database connection or transaction middleware
- Puts singleton services to the InvokeContext
- It's also allows you to access InvokeContext from anywhere.

We can call any method with "mini netcore framework"

Following examples demonstrates how can we use "Mini NetCore Framework"

## 1- Simple method call example

```csharp
// build application
Application.Current.Build();

// run target method
var proxy = new ProxyService<TestService>(new TestService(new ServiceContext()));
var result = proxy.Run(x => x.TestMethod1("test"));
System.Console.WriteLine(result);
```

## 2- Complex method call example

```csharp
var app = Application.Current;

// add services
app.AddService<LanguageService>("en-US");

// use middleware
app.appBuilder.UseCache();

// build application
Application.Current.Build();

// run target method
var proxy = new ProxyService<TestService>(new TestService(new ServiceContext()));
var result = proxy.RunAsync(x => x.TestMethod2("test"));
System.Console.WriteLine(result.Result.Data);
```

## 3- More Complex method call example

```csharp
//startup.cs

var app = Application.Current;

// add services
app.AddService<LanguageService>("en-US");

// use middleware
app.appBuilder.UseDatabaseContext(options =>
{
    options.DbProviderName = "System.Data.SQLite";
    options.ReadConnectionString = "Data Source=D:/ws/Test/.config/Core.Service/CoreService.db;";
    options.WriteConnectionString = "Data Source=D:/ws/Test/.config/Core.Service/CoreService.db;";
});

// build application
Application.Current.Build();

// run target method
var proxy = new ProxyService<TestService>(new TestService(new ServiceContext()));
UserDto userDto = new UserDto { Name = "Testd3452345", LastName = "Testd123452345", Age = 56, BirthDate = DateTime.Now };
var result = proxy.RunAsync(x => x.InsertUser(userDto));
result.Wait();
Console.WriteLine(result.Result.Data);

```

## TestService.cs

```csharp
public class TestService
{
    public ServiceContext ServiceContext { get; set; }
    
    public TestService(ServiceContext context)
    {
        this.ServiceContext = context;
    }

    public string TestMethod1(string arg1)
    {
        System.Console.WriteLine(ServiceContext.URL);
        return "success";
    }

    public ServiceResponse<string> TestMethod2(string arg1)
    {
        System.Console.WriteLine(ServiceContext.URL);
        return new ServiceResponse<string>("success");
    }

    // [Authorized]
    // [DatabaseConnection(true)]
    [Transactional(true)]
    public ServiceResponse<string> InsertUser(UserDto userDto)
    {
        DatabaseContext dbContext = ServiceContext.GetItem<DatabaseContext>("DatabaseContext");
        var languageService = Application.Current.GetService<LanguageService>();
        var userRepository = new BaseRepositorySQLite<User>(dbContext.Connection, ServiceContext.UserInfo.Username);
        long id = userRepository.Insert(new User().CopyFrom(userDto));

        if (id > 0)
            return new ServiceResponse<string>(id.ToString(), languageService.Translate("Success", "tr-TR"));
        throw new ServiceException(ExceptionType.Error, languageService.Translate("Error", "tr-TR"));

    }
}

```

## Real Word Example

```csharp

public class Startup
    {
        private static ILog Log;
        public string ConfigurationPath { get; set; }
        public static void Start(string configFilePath) => new Startup(configFilePath);
        public Startup(string configFilePath)
        {
            ConfigManager.Current.Configure(configFilePath);
            Application.Current.Context.Items["environment.name"] = ConfigManager.Get<string>("environment.name");

            ConfigureServices();

            Configure();

            LoadDefaultData();

            Log.Info("######  Example.Service STARTED!  #######");
        }

        public void ConfigureServices()
        {
            var app = Application.Current;

            app.AddLanguageService<LanguageService>(ConfigManager.Get<string>("ui.language.default", "tr-TR"))

            .AddService<JobService>(ConfigManager.Get<string>("schedule.config.path"))

            .AddService<AuthorizationService>(acl => ACLConfig.GetAcl().ForEach(item => acl[item.PermissionCode + item.RoleId] = new string[] { item.PermissionCode, item.RoleId }));

        }
        public void Configure()
        {
            IApplicationBuilder app = Application.Current.appBuilder;

            app.UseLog(ConfigManager.Get<string>("log4net.config.path"));
            Log = LogManager.GetLogger(typeof(LogMiddleware));

            app.UseAttributeAuthorization();

            app.UseDatabaseContext(options =>
            {
                options.DbProviderName = ConfigManager.Get<string>("database.providername");
                options.ReadConnectionString = ConfigManager.Get<string>("database.write.connectionString");
                options.WriteConnectionString = ConfigManager.Get<string>("database.read.connectionString");
            });

            app.UseCache();

            Application.Current.Build();
        }

        public void LoadDefaultData()
        {
            Console.ForegroundColor = ConsoleColor.Green;

            //load appsettings
            #region Setting
            log4net.ILog log = log4net.LogManager.GetLogger(typeof(LogMiddleware));

            if (log.IsDebugEnabled) log.Debug("Loading settings...");
            try
            {
                IEnumerable<SettingsDto> settingsDtoList = null;

                var proxy = new ProxyService<SystemService>(new SystemService(new ServiceContext()));
                Task<ServiceResponse<IEnumerable<SettingsDto>>> tSettings = proxy.RunAsync((x) => x.ListSettingsInternal());
                tSettings.Wait();
                settingsDtoList = tSettings.Result.Data;

                if (settingsDtoList == null) throw new Exception("Settings not loaded!, check your database configurations!");

                foreach (SettingsDto _settings in settingsDtoList)
                {
                    if (_settings?.Key != null && _settings.Val != null && !ConfigManager.Current.Configurations.ContainsKey(_settings.Key))
                        ConfigManager.Current.Configurations[_settings.Key] = _settings.Val;
                }
                if (log.IsDebugEnabled) log.Debug($"Settings loaded. Count:{ConfigManager.Current.Configurations.Count}");
            }
            catch (Exception ex)
            {
                log.Error("Settings not loaded! service cannot started!, check  your database connections.", ex);
                throw ex;
            }
            #endregion

            //load cache manager
            #region Language Cache
            try
            {
                var proxy = new ProxyService<SystemService>(new SystemService(new ServiceContext()));
                IEnumerable<LanguageDto> langDtoList = null;
                Task<ServiceResponse<IEnumerable<LanguageDto>>> tLang = proxy.RunAsync((x) => x.ListAllLanguage());
                tLang.Wait();
                langDtoList = tLang.Result.Data;

                var langService = Application.Current.GetService<LanguageService>();

                foreach (LanguageDto lang in langDtoList)
                {
                    object _value = lang.Val;
                    if (!langService.Cache(lang.LanguageCode.ToUpper()).TryGetValue(lang.Key, out _value))
                        langService.Cache(lang.LanguageCode.ToUpper())[lang.Key] = lang.Val;
                }
                if (log.IsDebugEnabled) log.Debug("Language cache loaded..");
            }
            catch (Exception ex)
            {
                log.Error("Settings not loaded! service cannot started!, check  your database connections.", ex);
                throw ex;
            }
            #endregion

            Console.ResetColor();
        }

    }

```
