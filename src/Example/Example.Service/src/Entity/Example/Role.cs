/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using System;
using System.Collections.Generic;
using Core.Framework.Repository.Entity;
using Example.DTO.Example;

namespace Example.Service.Entity.Example
{
    [Table("ROLE")]
    [Serializable]
    public class Role : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public Role CopyFrom(RoleDto dto)
        {
            this.Name = dto.Name;
            this.Description = dto.Description;
            BaseCopyFrom<Role>(dto);
            return this;
        }

        public RoleDto CopyTo(RoleDto dto)
        {
            dto.Name = this.Name;
            dto.Description = this.Description;
            BaseCopyTo<RoleDto>(dto);
            return dto;
        }
    }
}