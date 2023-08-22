# REACT NOTE

Before starting the server: `npm install`.<br>
To start the server:`npm start`<br>

### To initially upload folders/files:
`git add .`<br>
`git commit -m "message"`<br>
`git push`

### To update code to a branch:<br>
`git add .`<br>
`git commit -m "message"`<br>
Check what branch you are currently on with `git status` <br>
Create and checkout to a new branch from your current commit: `git checkout -b [branchname]`<br>
Then, push the new branch up to the remote: `git push -u origin [branchname]`

### To upload code to a new branch:<br>
`git clone repo`<br>
`cd repo`<br>
`git status` to check if is in main branch<br>
Create and checkout to a new branch: `git checkout -b [branchname]`<br>
Put you files into the repo<br>
`git add .`<br>
`git commit -m "message"`<br>
`git push origin example-tutorial-branch`


### Create an react server:<br>
cd to your desired dir and then<br>
1.npx create-react-app react-proj-name<br>
2.cd react-proj-name<br>
3.npm start<br>

### To add new package: npm install - - save d3 (must be in the react-proj-name dir)<br>

#### How to start a server from a downloaded react project:<br>
1 cd to react-proj-name<br>
2 npm install<br>
3 npm install - - save d3 (- - should be concated)<br>
4 npm install react-bootstrap bootstrap
5 npm start<br>

