/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-07-26 13:29:00
 */
using System;
using Core.Framework.Middleware;
using Core.Framework.Service;
using Core.Framework.Util;
using Core.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;
using Example.DTO.System;
using Example.Service.Service;
using log4net;

namespace Example.Service
{
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

            Log.Info("######  "+ConfigManager.Get<string>("app.name")+".Service STARTED!  #######");
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

                if (settingsDtoList == null) throw new Exception("Config not loaded!, check your database configurations!");

                foreach (SettingsDto _settings in settingsDtoList)
                {
                    if (_settings?.Key != null && _settings.Val != null && !ConfigManager.Current.Configurations.ContainsKey(_settings.Key))
                        ConfigManager.Current.Configurations[_settings.Key] = _settings.Val;
                }
                if (log.IsDebugEnabled) log.Debug($"Config loaded. Count:{ConfigManager.Current.Configurations.Count}");
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
}