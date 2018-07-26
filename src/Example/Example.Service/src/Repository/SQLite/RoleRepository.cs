/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using Core.Framework.Repository;
using Core.Framework.Service;
using Example.Service.Entity;
using Example.Service.Entity.System;
using Example.Service.Entity.Example;

namespace Example.Service.Repository.SQLite
{
    public class RoleRepository : BaseRepositorySQLite<Role>, IRoleRepository
    {
        public RoleRepository(DatabaseContext databaseContext, ServiceContext serviceContext) : base(databaseContext.Connection, serviceContext.UserInfo.Username)
        { }

    }
}