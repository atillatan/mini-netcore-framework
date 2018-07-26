/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using System;
using System.Linq;
using Core.Framework.Repository;
using Core.Framework.Service;
using Core.Framework.Util;
using DynamicDbUtil;
using Example.Service.Entity;
using Example.Service.Entity.System;
using Example.Service.Entity.Example;

namespace Example.Service.Repository.SQLite
{
    public class UserDynamicRepository : BaseRepositorySQLite<User>, IUserRepository
    {
        public UserDynamicRepository(DatabaseContext databaseContext, ServiceContext serviceContext) : base(databaseContext.Connection, serviceContext.UserInfo.Username)
        { }

        public override long Insert(User obj)
        {
            setDefaults(obj, SqlType.Insert);
            long result = Connection.Execute(@"
            INSERT INTO USER 
            (
                Name, 
                LastName, 
                Age, 
                BirthDate, 
                GenderCodeId, 
                NationalityCodeId, 
                CreateDate, 
                CreatedBy, 
                UpdateDate, 
                UpdatedBy, 
                IsActive
            ) 
            VALUES
            (
                {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}
            )",
            obj.Name, obj.LastName, obj.Age, obj.BirthDate, obj.GenderCodeId, obj.NationalityCodeId, obj.CreateDate, obj.CreatedBy, obj.UpdateDate, obj.UpdatedBy, obj.IsActive);

            if (result == 1) result = Connection.Get("SELECT last_insert_rowid()");
            return result;
        }

        public override User Get(long id)
        {
            var user = Connection.Get<User>(@"
            SELECT 
                * 
            FROM USER 
            WHERE 
                ID={0} AND 
                IsActive=1
            ", id);
            return user;
        }


        public override int Update(User obj)
        {
            setDefaults(obj, SqlType.Update);

            int count = Connection.Execute(@"
            UPDATE USER
            SET Name={0}, 
                LastName={1},  
                Age={2},  
                BirthDate={3},  
                GenderCodeId={4},  
                NationalityCodeId={5}, 
                CreateDate={6}, 
                CreatedBy={7}, 
                UpdateDate={8}, 
                UpdatedBy={9}, 
                IsActive={10}, 
            WHERE 
                Id={11}",
            obj.Name, obj.LastName, obj.Age, obj.BirthDate, obj.GenderCodeId, obj.NationalityCodeId, obj.CreateDate, obj.CreatedBy, obj.UpdateDate, obj.UpdatedBy, obj.IsActive, obj.Id);

            return count;
        }

        public override int Delete(long id)
        {
            int count = Connection.Execute(@"
            UPDATE USER
            SET IsActive={0}, 
            WHERE 
                Id={1}",
            0, id);

            return count;
        }

        public override int DeleteHard(long id)
        {
            return Connection.Execute("DELETE FROM USER WHERE Id={0}", id);
        }

    }
}