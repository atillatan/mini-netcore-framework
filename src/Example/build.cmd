@echo off

dotnet restore Example.API\src
dotnet build  Example.API\src

cd Example.Web
cmd /c ng build --base-href ./
cd ../

pause