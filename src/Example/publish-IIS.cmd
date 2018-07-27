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
cd  Example.API\src
dotnet restore
dotnet build -c Release
dotnet publish --output "../../%PUBLISH_PATH%/IIS"
cd ../../

:: Copy .config
xcopy "../.config/example" "%PUBLISH_PATH%/IIS/.config/example"  %cpycmd%
echo %BUILD_VERSION% > "%PUBLISH_PATH%\IIS\manifest.txt"

:: Build Angular Project, output path is in the angular.json file
cd Example.Web
cmd /c ng build --prod --base-href ./
cd ../

:: Copy Angular project
xcopy "Example.Web/dist" "%PUBLISH_PATH%/IIS/wwwroot"  %cpycmd%

pause