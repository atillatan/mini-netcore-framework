/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using Core.Framework.Repository.DTO;
using System;
using System.Runtime.Serialization;

namespace Example.DTO.Example
{
    [Serializable]
    [DataContract]
    public class RoleDto : BaseDto
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Description { get; set; }

        public override string ToString()
        {
            return $"{Name} {Description}";
        }
    }
}