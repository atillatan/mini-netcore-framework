/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-04-16 12:28:48
 */
using System;
using System.Collections.Generic;
using Core.Framework.Repository.DTO;
using Core.Framework.Repository.Entity;


namespace Consoleapp
{
    [Table("USER")]
    [Serializable]
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public DateTime? BirthDate { get; set; }
        public int? GenderCodeId { get; set; }
        public int? NationalityCodeId { get; set; }
 
        public User CopyFrom(UserDto dto)
        {
            this.Name = dto.Name;
            this.LastName = dto.LastName;
            this.Age = dto.Age;
            this.BirthDate = dto.BirthDate;
            this.GenderCodeId = dto.GenderCodeId;
            this.NationalityCodeId = dto.NationalityCodeId;
            BaseCopyFrom<User>(dto);
            return this;
        }

        public UserDto CopyTo(UserDto dto)
        {
            dto.Name = this.Name;
            dto.LastName = this.LastName;
            dto.Age = this.Age;
            dto.BirthDate = this.BirthDate;
            dto.GenderCodeId = this.GenderCodeId;
            dto.NationalityCodeId = this.NationalityCodeId;
            BaseCopyTo<UserDto>(dto);
            return dto;
        }
    }
}