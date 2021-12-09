# ExpressNodeJS
Starter learning about NodeJS and Express
Here is how to use this code
1. Clone this project to current working folder of your laptop
2. Ensure Node JS already installed
3. Independently try to run every code refer to each commit message
   node <name of js>
4. Stream Buffer features are stored on another folder
5. Refer to website : npmjs.com to install another module such as express , nodemon
    type CLI : npm install express
               npm init
    this will create package
   
    Type CLI : npm install -g nodemon
   
7. If found error such below
   PS C:\Users\lenovo\Desktop\Projects\ExpressNodeJS\streambuff> nodemon .\approuting.js
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon .\approuting.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\lenovo\Desktop\Projects\ExpressNodeJS\streambuff> nodemon approuting.js
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon approuting.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
   
   
 please do likethis on power script
   1. Get-ExecutionPolicy -List
   
    Scope ExecutionPolicy
        ----- ---------------
   UserPolicy       Undefined
 LocalMachine       Undefined
   
   2. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
