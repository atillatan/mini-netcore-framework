/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using Core.Framework.Repository;
using Core.Framework.Service;
using System.Linq;
using Dapper;
using Example.Service.Entity;
using Example.Service.Entity.System;
using Example.Service.Entity.Example;

namespace Example.Service.Repository.SQLite
{
    public class UserRepository : BaseRepositorySQLite<User>, IUserRepository
    {
        public UserRepository(DatabaseContext databaseContext, ServiceContext serviceContext) : base(databaseContext.Connection, serviceContext.UserInfo.Username)
        { }

        public override long Insert(User obj)
        {
            setDefaults(obj, SqlType.Insert);

            int result = Connection.Execute($@"
            INSERT INTO {TableName} 
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
                @Name, @LastName, @Age, @BirthDate, @GenderCodeId, @NationalityCodeId, @CreateDate, @CreatedBy, @UpdateDate, @UpdatedBy, @IsActive)", 
            new
            {
                Name = obj.Name,
                LastName = obj.LastName,
                Age = obj.Age,
                BirthDate = obj.BirthDate,
                GenderCodeId = obj.GenderCodeId,
                NationalityCodeId = obj.NationalityCodeId,
                CreateDate = obj.CreateDate,
                CreatedBy = obj.CreatedBy,
                UpdateDate = obj.UpdateDate,
                UpdatedBy = obj.UpdatedBy,
                IsActive = obj.IsActive
            });

            if (result == 1)
            {
                result = Connection.ExecuteScalar<int>("SELECT last_insert_rowid()");
            }


            return result;
        }

        public override User Get(long id)
        {
            var user = Connection.Query<User>($@"SELECT * FROM {TableName} WHERE  ID = @Id  AND IsActive=1", new { Id = id }).SingleOrDefault();
            return user;
        }
        public override int Update(User obj)
        {
            setDefaults(obj, SqlType.Update);

            string sql = $@"
            UPDATE {TableName} 
            SET 
                Name=@Name, 
                LastName=@LastName, 
                Age=@Age, 
                BirthDate=@BirthDate, 
                GenderCodeId=@GenderCodeId, 
                NationalityCodeId=@NationalityCodeId, 
                CreateDate=@CreateDate, 
                CreatedBy=@CreatedBy,
                UpdateDate=@UpdateDate,
                UpdatedBy=@UpdatedBy,
                IsActive=@IsActive
            WHERE Id=@Id";
            int count = Connection.Execute(sql,
            new
            {
                Id = obj.Id,
                Name = obj.Name,
                LastName = obj.LastName,
                Age = obj.Age,
                BirthDate = obj.BirthDate,
                GenderCodeId = obj.GenderCodeId,
                NationalityCodeId = obj.NationalityCodeId,
                CreateDate = obj.CreateDate,
                CreatedBy = obj.CreatedBy,
                UpdateDate = obj.UpdateDate,
                UpdatedBy = obj.UpdatedBy,
                IsActive = obj.IsActive
            });

            return count;
        }

        public override int Delete(long id)
        {
            return Connection.Execute($"UPDATE {TableName} SET IsActive=0 WHERE Id=@Id", new { Id = id });
        }

        public override int DeleteHard(long id)
        {
            return Connection.Execute($"DELETE FROM {TableName} WHERE Id=@Id", new { Id = id });
        }


    }
}