/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-05-02 18:16:14
 */
using Core.Framework.Repository;
using Core.Framework.Service;
using Example.Service.Entity.System;

namespace Example.Service.Repository.SQLite
{
    public class LanguageRepository : BaseRepositorySQLite<Language>, ILanguageRepository
    {
        public LanguageRepository(DatabaseContext databaseContext, ServiceContext serviceContext) : base(databaseContext.Connection, serviceContext.UserInfo.Username)
        { }

    }
}