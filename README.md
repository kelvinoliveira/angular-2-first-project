# angular-2-first-project
Angular 2 - First project

## Configuration tasks

Install all packages

	> npm install
	
Run the app

	> npm start
	
## Other tasks

Remove dist directory

	> gulp clean
	
Compile TypeScript sources and create sourcemaps in dist directory.

	> gulp compile

Copy all resources that are not TypeScript files into dist directory.

	> gulp resources

Copy all required libraries into dist directory.

	> gulp libs

Watch for changes in TypeScript, HTML and CSS files.

	> gulp watch
	
Build the project. (This task runs `gulp compile`, `gulp resources`, `gulp libs`)

	> gulp build
	

  
