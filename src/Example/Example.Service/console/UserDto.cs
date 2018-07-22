/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using Core.Framework.Repository.DTO;
using System;
using System.Runtime.Serialization;

namespace Consoleapp
{
    [Serializable]
    [DataContract]
    public class UserDto : BaseDto
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string LastName { get; set; }

        [DataMember]
        public int? Age { get; set; }

        [DataMember]
        public DateTime? BirthDate { get; set; }

        [DataMember]
        public int? GenderCodeId { get; set; }

        [DataMember]
        public int? NationalityCodeId { get; set; }

        public override string ToString()
        {
            return $"{Name} {LastName}";
        }

    }
}