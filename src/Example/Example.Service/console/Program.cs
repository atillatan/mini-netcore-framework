/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 11:54:51 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-04-16 16:00:05
 */
using System;
using Core.Framework;
using Core.Framework.Middleware;
using Core.Framework.Service;

namespace Consoleapp
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1- Simple call example
            // Application.Current.Build();
            // var proxy1 = new ProxyService<TestService>(new TestService(new ServiceContext()));
            // var result1 = proxy1.Run(x => x.TestMethod1("test"));
            // System.Console.WriteLine(result1);


            // 2- Complex call example
            // var app = Application.Current;

            // // add services
            // app.AddService<LanguageService>("tr-TR");

            // // use middwares
            // app.appBuilder.UseCache();

            // Application.Current.Build();

            // var proxy2 = new ProxyService<TestService>(new TestService(new ServiceContext()));
            // var result2 = proxy2.RunAsync(x => x.TestMethod2("test"));
            // System.Console.WriteLine(result2.Result.Data);

            // 3- More Complex call example
            var app2 = Application.Current;

            // add services
            app2.AddService<LanguageService>("tr-TR");
            // use middwares
            app2.appBuilder.UseDatabaseContext(options =>
            {
                options.DbProviderName = "System.Data.SQLite";
                options.ReadConnectionString = "Data Source=D:/ws/Example/.config/Core.Service/CoreService.db;";
                options.WriteConnectionString = "Data Source=D:/ws/Example/.config/Core.Service/CoreService.db;";
            });

            Application.Current.Build();

            var proxy3 = new ProxyService<TestService>(new TestService(new ServiceContext()));

            UserDto userDto = new UserDto { Name = "Testd3452345", LastName = "Testd123452345", Age = 56, BirthDate = DateTime.Now };
            var result3 = proxy3.RunAsync(x => x.InsertUser(userDto));
            result3.Wait();
            Console.WriteLine(result3.Result.Data);

        }
    }
}
