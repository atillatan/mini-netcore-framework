/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by:   Atilla Tanrikulu 
 * @Last Modified time: 2018-04-16 10:10:45 
 */
using Core.Framework.Repository.DTO;
using System;
using System.Runtime.Serialization;

namespace Example.DTO
{
    [Serializable]
    [DataContract]
    public class TemplateDto : BaseDto
    {

        [DataMember]
        public string Name { get; set; }


        [DataMember]
        public int Version { get; set; }


    }
}