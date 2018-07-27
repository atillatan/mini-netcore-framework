@echo off
set ASPNETCORE_ENVIRONMENT=Production
set cpycmd=/D /I /E /F /Y /H /R 
SET PUBLISH_PATH=dist
SET BUILD_VERSION={ "version":"1.0.0"}

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
dotnet publish -r win10-x64 --self-contained --output "../../%PUBLISH_PATH%/win10-x64"
cd ../../

:: Copy .config
xcopy "../.config/example" "%PUBLISH_PATH%/win10-x64/.config/example"  %cpycmd%
echo %BUILD_VERSION% > "%PUBLISH_PATH%\win10-x64\version.json"

:: Build Angular Project, output path is in the angular.json file
cd Example.Web
cmd /c ng build --prod --base-href ./
cd ../

:: Copy Angular project
xcopy "Example.Web/dist" "%PUBLISH_PATH%/win10-x64/wwwroot"  %cpycmd%

:: Build nuget package
cd ../Example.API
dotnet pack src --include-source --output %PUBLISH_PATH% --verbosity n /p:PackageVersion=%VERSION% -c relase

pause