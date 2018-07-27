@echo off
set ASPNETCORE_ENVIRONMENT=Production
set cpycmd=/D /I /E /F /Y /H /R 
SET PUBLISH_PATH=dist
SET BUILD_VERSION=1.0.0

if NOT "%1" == "" (SET PUBLISH_PATH=%1)
if NOT "%2" == "" (SET BUILD_VERSION=%2)

@echo ============ CONFIG ============
@echo PUBLISH_PATH:%PUBLISH_PATH% 
@echo BUILD_VERSION:%BUILD_VERSION%
@echo CWD:%cd%
@echo ================================

:: Publish dotnet core project
cd src
dotnet restore
dotnet build -c Release
dotnet publish -r win10-x64 --self-contained --output "../%PUBLISH_PATH%/win10-x64"
cd ../../

echo %BUILD_VERSION% > "%PUBLISH_PATH%\win10-x64\manifest.txt"

 