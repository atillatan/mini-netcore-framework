/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 15:29:32 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-07-22 21:11:59
 */
using Core.Framework.Repository;
using Core.Framework.Service;
using Consoleapp;
using Core.Framework;
using Core.Framework.Middleware;

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