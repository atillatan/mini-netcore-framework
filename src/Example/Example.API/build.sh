#!/bin/sh
export ASPNETCORE_ENVIRONMENT="development"
cd src
dotnet restore
dotnet build 






