# OrderApp
 
This project was developed with:
FrontEnd:
- Angular CLI: 16.2.9
- Node: 16.20.2 
- Angular material
- Bootstrap
- fortawesome

BackEnd:
- Net Core 8
- EntityFramework
- CodeFirst
- SqlServer
- Repository Pattern
 
To run correctly this project please follow the next instructions:

- Download the project
- Search the OrderApp folder on your PC
	- In this folder you can found other 2 folders: 
		- Backend project: Orders.Solution C# | .NetCore 8 | You have to use Visual Studio 2022
		- Frontend project: orderadminangular Angular 
- Once opened the frontend project with Visual Studio Code, you need to run "npm install" command
- Open the BackEnd with Visual Studio 2022, It can use Net Core 8 
- set the correct port number on the enviroment/enviroment.ts file
- In backend, setup the correct name for Server in the connectionstring on appsettings.Development.json
- Once you run the backend project the database will be created using codefirst and scaffolding with some data
	