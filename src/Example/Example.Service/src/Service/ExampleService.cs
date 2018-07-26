/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:07:49 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-05-30 13:38:50
 */
using System.Collections.Generic;
using System.Linq;
using Core.Framework.Service;
using Core.Framework.Repository.DTO;
using Core.Framework.Middleware;
using Core.Framework;
using Example.DTO.Example;
using Example.Service.Entity.Example;
using Example.Service.Repository;
using log4net;


namespace Example.Service.Service
{
     // [Authorized]
    public class ExampleService
    {
        private static readonly ILog Log = LogManager.GetLogger(typeof(ExampleService));

        public ServiceContext ServiceContext { get; set; }
        public ExampleService(ServiceContext serviceContext)
        {
            this.ServiceContext = serviceContext;
        }

        public LanguageService LanguageService = Application.Current.GetService<LanguageService>();
        public string Translate(string key) => LanguageService.Translate(key, ServiceContext.UserInfo.Language);

        #region User

        /// <summary>
        /// veriyi sisteme kaydeder
        /// </summary>
        /// <param name="userDto">Kaydedilecek UserDto nesnesi</param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("USER_INSERT")]
        public ServiceResponse<long> InsertUser(UserDto userDto)
        {
            if (userDto == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DATA_NOT_FOUND_TO_SAVE));
            User userEntity = new User();
            var Rm = new RepositoryManager(ServiceContext);
            long id = Rm.UserRepository.Insert(userEntity.CopyFrom(userDto));

            if (id > 0)
                return new ServiceResponse<long>(id, Translate(MessagesConstants.SCC_DATA_INSERTED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_INSERT));
        }



        /// <summary>
        /// Tekil bir kayit bilgisini veri tabanindan getirir.
        /// </summary>
        /// <param name="id">Getirilecek olak usernin ID degeri</param>
        /// <returns></returns>
        [Transactional(false)]
        //[Authorized("USER_GET")]
        public ServiceResponse<UserDto> GetUser(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            User userEntity = Rm.UserRepository.Get(id);
            if (userEntity == null)
                throw new ServiceException(ExceptionType.Warning, Translate(MessagesConstants.WRN_RECORD_NOT_FOUND));
            return new ServiceResponse<UserDto>(userEntity.CopyTo(new UserDto()));
        }

        /// <summary>
        /// Kayit bilgilerini gunceller
        /// </summary>
        /// <param name="userDto">Guncellencek olan UserDto nesnesi</param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("USER_UPDATE")]
        public ServiceResponse<int> UpdateUser(UserDto userDto)
        {

            if (userDto == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DATA_NOT_FOUND_TO_SAVE));
            User userEntity = new User();
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.UserRepository.Update(userEntity.CopyFrom(userDto));

            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_UPDATED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_UPDATE));
        }

        /// <summary>
        /// Kayit siler
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("USER_DELETE")]
        public ServiceResponse<int> DeleteUser(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.UserRepository.Delete(id);
            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_DELETED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DELETE));
        }

        /// <summary>
        /// Kayitlar sayfali olarak sorgulanir. pagingDto parametresinde, sayfalama degeri, maksimum degerden kuzuk olmalidir.
        /// </summary>
        /// <param name="userDto">Listelenecek olan verinin arama kriterleri</param>
        /// <param name="pagingDto">Sayfalama isleminde kullanilacak parametreler.</param>
        /// <returns></returns>
        [Transactional(false)]
        [Authorized("USER_LIST")]
        public ServiceResponse<IEnumerable<UserDto>> ListUser(UserDto userDto, PagingDto pagingDto)
        {
            var Rm = new RepositoryManager(ServiceContext);
            IEnumerable<User> list = Rm.UserRepository.List(userDto, ref pagingDto);

            IEnumerable<UserDto> restulList = list.Select(entity => entity.CopyTo(new UserDto())).ToList();
            if (list == null || !list.Any())
                throw new ServiceException(ExceptionType.Warning, Translate(MessagesConstants.WRN_RECORD_NOT_FOUND));
            return new ServiceResponse<IEnumerable<UserDto>>(restulList, pagingDto.count);
        }

        /// <summary>
        /// Kayit kalici olarak siler
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("USER_DELETE_HARD")]
        public ServiceResponse<int> DeleteHardUser(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.UserRepository.DeleteHard(id);
            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_DELETED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DELETE));
        }
        #endregion User

        #region Role
        /// <summary>
        /// Role kaydet
        /// </summary>
        /// <param name="roleDto"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("ROLE_INSERT")]
        public ServiceResponse<long> InsertRole(RoleDto roleDto)
        {

            if (roleDto == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DATA_NOT_FOUND_TO_SAVE));

            Role roleEntity = new Role();
            var Rm = new RepositoryManager(ServiceContext);
            long id = Rm.RoleRepository.Insert(roleEntity.CopyFrom(roleDto));
            if (id > 0)
                return new ServiceResponse<long>(id, Translate(MessagesConstants.SCC_DATA_INSERTED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_INSERT));
        }

        /// <summary>
        /// Id si verilen role getirir
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transactional(false)]
        [Authorized("ROLE_GET")]
        public ServiceResponse<RoleDto> GetRole(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            Role roleEntity = Rm.RoleRepository.Get(id);
            if (roleEntity == null)
                throw new ServiceException(ExceptionType.Warning, Translate(MessagesConstants.WRN_RECORD_NOT_FOUND));
            return new ServiceResponse<RoleDto>(roleEntity.CopyTo(new RoleDto()));
        }

        /// <summary>
        /// verilen RoleDto yu gunceller
        /// </summary>
        /// <param name="roleDto"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("ROLE_UPDATE")]
        public ServiceResponse<int> UpdateRole(RoleDto roleDto)
        {

            if (roleDto == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DATA_NOT_FOUND_TO_SAVE));

            Role roleEntity = new Role();
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.RoleRepository.Update(roleEntity.CopyFrom(roleDto));

            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_UPDATED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_UPDATE));
        }

        /// <summary>
        /// Sistemden role siler
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("ROLE_DELETE")]
        public ServiceResponse<int> DeleteRole(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.RoleRepository.Delete(id);
            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_DELETED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DELETE));
        }

        /// <summary>
        /// RoleDto verilerine gore sorgualama yapar
        /// </summary>
        /// <param name="roleDto"></param>
        /// <returns></returns>
        [Transactional(false)]
        [Authorized("ROLE_LIST")]
        public ServiceResponse<IEnumerable<RoleDto>> ListRole(RoleDto roleDto, PagingDto pagingDto)
        {
            var Rm = new RepositoryManager(ServiceContext);
            IEnumerable<Role> list = Rm.RoleRepository.List(roleDto, ref pagingDto);
            IEnumerable<RoleDto> restulList = list.Select(entity => entity.CopyTo(new RoleDto())).ToList();

            if (list == null || !list.Any())
                throw new ServiceException(ExceptionType.Warning, Translate(MessagesConstants.WRN_RECORD_NOT_FOUND));
            return new ServiceResponse<IEnumerable<RoleDto>>(restulList, pagingDto.count);
        }

        /// <summary>
        /// Kayit kalici olarak siler
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transactional(true)]
        [Authorized("ROLE_DELETE_HARD")]
        public ServiceResponse<int> DeleteHardRole(long id)
        {
            var Rm = new RepositoryManager(ServiceContext);
            int rowsAffected = Rm.RoleRepository.DeleteHard(id);
            if (rowsAffected > 0)
                return new ServiceResponse<int>(rowsAffected, Translate(MessagesConstants.SCC_DATA_DELETED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_DELETE));
        }

        #endregion Rol

        #region Test

        [Transactional(true)]
        [Authorized("USER_INSERT")]
        public ServiceResponse<int> InsertAllUser(List<UserDto> userList)
        {

            if (userList == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_INSERT));
            List<User> restulList = userList.Select(dto => (new User()).CopyFrom(dto)).ToList();
            var Rm = new RepositoryManager(ServiceContext);
            int id = Rm.UserRepository.InsertAll(restulList);
            if (id > 0)
                return new ServiceResponse<int>(id, Translate(MessagesConstants.SCC_DATA_INSERTED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_UPDATE));
        }

        [Transactional(true)]
        [Authorized("ROLE_INSERT")]
        public ServiceResponse<int> InsertAllRole(List<RoleDto> roleList)
        {

            if (roleList == null) throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_INSERT));

            List<Role> restulList = roleList.Select(dto => (new Role()).CopyFrom(dto)).ToList();
            var Rm = new RepositoryManager(ServiceContext);
            int id = Rm.RoleRepository.InsertAll(restulList);
            if (id > 0)
                return new ServiceResponse<int>(id, Translate(MessagesConstants.SCC_DATA_INSERTED));
            throw new ServiceException(ExceptionType.Error, Translate(MessagesConstants.ERR_INSERT));
        }


        #endregion Test

    }
}