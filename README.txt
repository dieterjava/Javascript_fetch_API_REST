CRUD example with web-components and json.server

see video at  https://www.youtube.com/watch?v=ccX3ApO4qz8

Install Live Server and json-server.
npm install -g json-server
Install Live Server from VS Code plugins. Restart VS Code afterwards.
#########################
Start json-server with:
cd data
json-server --watch db.json
Click Go Live in VS Code , bottom line.
Go to http://127.0.0.1:5500/  

#########################
Using Live Server. Click Go Live in VS Code , bottom line.

Use emmet abbreviations, like .title or .class 
for html, css code completion
 see cheat sheet at https://docs.emmet.io/cheat-sheet/

Use bootstrap version 4.0

from https://getbootstrap.com/docs/4.0/getting-started/introduction/

npm install bootstrap

Use bootstrap card component 
https://getbootstrap.com/docs/4.0/components/card/

Use json-server with:
cd data
json-server --watch db.json

Remarks:
 
0. just javascript, simple String and Html scripting,
    no TypeScript, just strings, no type checking
    ==> mistakes in typing are not allowed :-)

1. Javascript libraries: 
e.g. bootstrap, be aware of the version incompatibilities, 3...., 4..., 5....
==> npm install package@version
==> npm install bootstrap@4.6

2. class in html and css ist just a string
  e.g. <div class="col-md-6">

3. Debug in Chrome in order to figure out errors.

To Dos:
0. Good: only one javascript file.
3. No extra libraries, remove bootstrap
4. Add new field
4. Minimize fields occurences, for generic javascript generation.
