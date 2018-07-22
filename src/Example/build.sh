#!/bin/sh
export ASPNETCORE_ENVIRONMENT="development"

dotnet restore Example.API/src
dotnet build  Example.API/src

cd Example.Web
ng build --base-href ./
cd ../
