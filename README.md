# OrderApp
  
Angular project:
- Angular CLI: 16.2.9
- Node: 18.20.1 
  
React project:
- React: 18.2.0
- Node: 18.20.1  

.Net project:
- Net Core 8
- EntityFramework
- CodeFirst
- SqlServer
- Repository Pattern
 
To run correctly this project please follow the next instructions:
 
- Download the projects from Git
- Search the OrderApp folder on your PC
	- In this folder you can find other three folders: 
		- Backend project: 
			- Orders.Solution C# | .NetCore 8 | You HAVE TO use Visual Studio 2022
		- Frontend projects: 
			- orderadminangular Angular 
			- orderadminreact React 
			
- Once opened the frontend projects with Visual Studio Code, you need to run "npm install" command
- Start Angular project with "ng serve -o" command
- Start React project with "npm start" command
- Open the BackEnd with Visual Studio 2022, It can use Net Core 8 
- set the correct port number on the Angular project -> enviroment/enviroment.ts file
- In backend, setup the correct name for Server in the connectionstring on appsettings.Development.json
- Once you run the backend project the database will be created using codefirst and scaffolding with some data
	