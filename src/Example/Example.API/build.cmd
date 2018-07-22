@echo off
set ASPNETCORE_ENVIRONMENT=development
dotnet restore src
dotnet build src

