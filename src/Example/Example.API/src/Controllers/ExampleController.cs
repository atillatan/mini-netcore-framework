/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-05-30 13:38:32
 */
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Framework.Service;
using Core.Framework.Repository.DTO;
using Example.DTO.System;
using Example.DTO.Example;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace Example.API.Controllers
{
    [Route("api/[controller]/[action]")]
    // [Authorize]
    public class ExampleController : BaseAPIController<ExampleController>
    {
        #region ExampleService.User

        // POST api/example/postuser
        [HttpPost]
        public async Task<ServiceResponse<long>> PostUser([FromBody] UserDto userDto) => await Sm.ExampleService.RunAsync(x => x.InsertUser(userDto));

        // GET api/example/getuser/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<UserDto>> GetUser(int id) => await Sm.ExampleService.RunAsync(x => x.GetUser(id));

        // PUT api/example/putuser
        [HttpPut]
        public async Task<ServiceResponse<int>> PutUser([FromBody] UserDto userDto) => await Sm.ExampleService.RunAsync(x => x.UpdateUser(userDto));

        // DELETE api/example/deleteuser/id
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<int>> DeleteUser(int id) => await Sm.ExampleService.RunAsync(x => x.DeleteUser(id));

        // GET api/example/listuser
        [HttpPost]
        public async Task<ServiceResponse<IEnumerable<UserDto>>> ListUser([FromBody]IDictionary<string, object> data)
        {
            if (data == null) throw new System.ArgumentNullException(nameof(data));
            UserDto searchDto = JsonConvert.DeserializeObject<UserDto>(data["searchDto"].ToString());
            PagingDto pagingDto = JsonConvert.DeserializeObject<PagingDto>(data["pagingDto"].ToString());
            return await Sm.ExampleService.RunAsync(x => x.ListUser(searchDto, pagingDto));
        }

        #endregion ExampleService.User

        #region ExampleService.Rol

        // POST api/example/postrole
        [HttpPost]
        public async Task<ServiceResponse<long>> PostRol([FromBody] RoleDto roleDto) => await Sm.ExampleService.RunAsync(x => x.InsertRole(roleDto));

        // GET api/example/getrole/5
        [HttpGet("{id}")]
        public async Task<ServiceResponse<RoleDto>> GetRol(int id) => await Sm.ExampleService.RunAsync(x => x.GetRole(id));

        // PUT api/example/putrole/id
        [HttpPut]
        public async Task<ServiceResponse<int>> PutRol([FromBody] RoleDto roleDto) => await Sm.ExampleService.RunAsync(x => x.UpdateRole(roleDto));

        // DELETE api/example/deleterole/id
        [HttpDelete("{id}")]
        public async Task<ServiceResponse<int>> DeleteRol(int id) => await Sm.ExampleService.RunAsync(x => x.DeleteRole(id));

        // GET api/example/listrole
        [HttpPost]
        public async Task<ServiceResponse<IEnumerable<RoleDto>>> ListRol([FromBody]IDictionary<string, object> data)
        {
            if (data == null) throw new System.ArgumentNullException(nameof(data));
            RoleDto roleDto = JsonConvert.DeserializeObject<RoleDto>(data["roleDto"].ToString());
            PagingDto pagingDto = JsonConvert.DeserializeObject<PagingDto>(data["pagingDto"].ToString());
            return await Sm.ExampleService.RunAsync(x => x.ListRole(roleDto, pagingDto));
        }

        #endregion ExampleService.Rol

        [HttpPost]
        public void ExampleCompexObject([FromBody]dynamic data)
        {
            UserDto userDto = JsonConvert.DeserializeObject<UserDto>(data.userDto.ToString());
            RoleDto roleDto = JsonConvert.DeserializeObject<RoleDto>(data.roleDto.ToString());
        }

        /// <summary>
        /// Request (key1=userDto value1=UserDto; key2=roleDto value1=RoleDto)
        /// ServiceResponse (key1=userDto value1=UserDto; key2=roleDto value1=RoleDto)
        /// </summary>
        /// <param name="dictionary"></param>
        [HttpPost]
        public void ExampleDictionary([FromBody]IDictionary<string, object> dictionary)
        {
            UserDto userDto = JsonConvert.DeserializeObject<UserDto>(dictionary["userDto"].ToString());
            RoleDto roleDto = JsonConvert.DeserializeObject<RoleDto>(dictionary["roleDto"].ToString());
        }
    }


}