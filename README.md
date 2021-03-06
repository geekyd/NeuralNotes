Neural Notes
-----------
App to work with notes & files in a mind map view [https://neural-notes.com](https://neural-notes.com)

The files are saved to Google Drive.

There is no DB, it's just files:
- every node on mind map is a folder
- basically it's a folder tree displayed as a mind map
- notes are just txt files inside the folders

## Kanban board (github project)
[Board](https://github.com/users/DarthVanger/projects/1)

## Code style / Architecture
We are using React, Redux and Sagas there. 

- Component file - a file that contain React.Component with view (without business logic)
- Container file - a file that connects react with redux. 
- Saga file - this file contains business logic and action handlers. Use it also to work with asynchronous stuff.
- Styles file - javascript file that exports Styled Components.

#### React:
Components are living in “/components” in componentName folder. For example “Note” component you will find in “/components/Note/NoteComponent.js”

NoteComponent.js should export React component with exact name as filename like “NoteComponent”. 

The same for containers - “NoteContainer”. 

#### Structure
All file types using their names as filename postfix. 
Examples: 

    components
    └── Note
        ├── NoteActions.js
        ├── NoteComponent.js
        ├── NoteConstants.js
        ├── NoteContainer.js
        ├── NoteReducer.js
        ├── NoteSagas.js
        └── NoteStyles.js

#### Styled Components
- Use “Styled” prefix for styled components. It will helps you yo understand in code what kind of components you are using. For example, if you override some styles for NoteComponent, please, gave it “StyledNote” name.

## Launch locally
```
git clone https://github.com/DarthVanger/NeuralNotes.git
cd NeuralNotes
npm install
npm start # launches a server at localhost:3000
```

## Production build
```
npm install
npm run build
```

Build script puts `index.html` and all the assets into `dist/` folder
```
$ ls dist/index*
dist/index.html         dist/index.js           dist/index.js.map
```

### Testing production build locally

To test the production build locally, simply serve files from the `dist/` folder.

For example you can easily launch a [nodejs http-server](https://www.npmjs.com/package/http-server) on port 3000 like this:
```
npx http-server -p 3000 ./dist/
```

Visit <http://localhost:3000> to see the website.

## Jenkins
http://neural-notes.com:8080/
