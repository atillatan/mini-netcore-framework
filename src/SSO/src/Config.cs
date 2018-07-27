/*
 * @Author: Atilla Tanrikulu 
 * @Date: 2018-04-16 10:10:45 
 * @Last Modified by: Atilla Tanrikulu
 * @Last Modified time: 2018-07-26 18:51:12
 */
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;


namespace SSO.Web
{
    public class Config
    {
        // scopes define the resources in your system
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource {
                    Name = "role",
                    DisplayName = "Your role names",
                    Description = "Your role names and role codes",
                    ShowInDiscoveryDocument = true
                }
            };
        }
        // authorized applications, protedted resources
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource> {
                new ApiResource("exampleapi", "Example.API", new List<string> { "name", "role", "email" })
            };
        }

        // clients want to access resources (aka scopes)
        public static IEnumerable<Client> GetClients() =>
            // client credentials client
            new List<Client>
            {
                new Client
                {
                    ClientId = "client",
                    ClientName = "ConsoleClient",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    ClientSecrets ={new Secret("123*".Sha256())},
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "role",
                        "example.api"
                        }
                },

                // resource owner password grant client
                new Client
                {
                    ClientId = "jsclient",
                    ClientName = "JavaScriptClient",
                    AllowedGrantTypes =  GrantTypes.Implicit,
                    ClientSecrets ={new Secret("123*".Sha256())},
                    RedirectUris = { "http://localhost:5003/callback.html","http://localhost:5003" },
                    PostLogoutRedirectUris = {  "http://localhost:5003/index.html" },
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "role",
                        "example.api"
                    },
                    AllowedCorsOrigins = new List<string>{
                        "http://127.0.0.1:8103",
                        "http://127.0.0.1:8104",
                        "http://127.0.0.1:8105"
                        },
                    RequireConsent = true,
                    AllowAccessTokensViaBrowser=true
                },
                
                // Angular client core service
                new Client
                {
                    ClientId = "cweb",
                    ClientName = "cweb",
                    AccessTokenLifetime = 60*60*4,
                    IdentityTokenLifetime = 60*60*4,
                    AllowedGrantTypes =  GrantTypes.Implicit,
                    AlwaysSendClientClaims=true,
                    AlwaysIncludeUserClaimsInIdToken = true,
                    ClientSecrets ={new Secret("123*".Sha256())},
                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    AllowOfflineAccess = true,
                    AccessTokenType = AccessTokenType.Jwt,
                    AllowedScopes = { "openid", "profile", "email", "role", "exampleapi"},
                    RedirectUris = {
                        "http://localhost:4200",
                        "http://localhost:8101"                        
                         },
                    PostLogoutRedirectUris = {
                        "http://localhost:4200",
                        "http://localhost:8101"         
                        },
                    AllowedCorsOrigins = new List<string>{
                        "http://127.0.0.1:4200", // web
                        "http://127.0.0.1:5001", // api
                        "http://127.0.0.1:8101",

                        "http://localhost:4200",
                        "http://localhost:5001",
                        "http://localhost:8101"
  
                    }
                },

                // OpenID Connect hybrid flow and client credentials client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,
                    RequireConsent = true,
                    ClientSecrets ={new Secret("123*".Sha256())},
                    RedirectUris = { "http://localhost:5002/signin-oidc" },
                    PostLogoutRedirectUris = { "http://localhost:5002/signout-callback-oidc" },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "role",
                        "core.api",
                        "alarm.api",
                        "devicemanager.api"
                    },
                    AllowOfflineAccess = true
                }
            };

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "systemuser",
                    Password = "123",
                    Claims = {
                        new Claim(JwtClaimTypes.Name,"Systemuser"),
                        new Claim(JwtClaimTypes.Role,"1c86feaa-5db6-4c49-b1d2-96502ac7208c"),
                        new Claim(JwtClaimTypes.Email, "systemuser@example.com")
                    }
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "adminuser",
                    Password = "123",
                    Claims = {
                        new Claim(JwtClaimTypes.Name,"Adminuser"),
                        new Claim(JwtClaimTypes.Role,"66007699-aa3e-4e13-843f-31f2db97905c"),
                        new Claim(JwtClaimTypes.Email, "adminuser@example.com")                    }
                },
                new TestUser
                {
                    SubjectId = "4",
                    Username = "testuser",
                    Password = "123",
                    Claims = {
                        new Claim(JwtClaimTypes.Name,"Testuser"),
                        new Claim(JwtClaimTypes.Role,"01e5fa54-7371-4cb9-8e59-a708f4d410fd"),
                        new Claim(JwtClaimTypes.Email, "testuser@example.com")
                    }
                }

            };
        }
    }
}