# Name Finder (from DB) ⚡

*** This project was only tested on the Google Chrome browser
## Steps to reproduce:
- #### git clone `https://github.com/nayemalam/dbNameLookup.git`
- #### cd `dbNameLookup`
- #### `yarn install`
- #### cd `backend`
- #### `yarn install`
- #### `cd ..` (back to root folder)

  - #### Development Mode:
    - cd `backend`, then `yarn start`, `cd ..` back to root, then `yarn start` <br />
    OR <br />
    - `yarn dev` <br/>
    This runs the entire app (including backend) in the development mode. <br/>
    Open http://localhost:3000 to access the user view. <br/>
    Open http://localhost:3001/api to access the backend. <br />
    The page will reload if you make edits.
  
  - #### Production Mode:
    - `yarn build`
    - `yarn serve` <br/>
    OR <br />
    - `yarn production` (this will do both build and serve) <br/>
    Runs the app in the production mode. <br/>
    Open http://localhost:5000 to view it in the browser. <br/>
    The page will not be loaded as the backend is only connected locally (and I didn't handle it for this use case). <br/>
    The page will not reload if you make edits.
#
#### What does this do?
- [x] Allows users to add a name into the database (connected locally)
- [x] Display name results based on search inputs (all cases handled)
- [x] Users can navigate to all names list, which shows all the names currently in db
- [x] Two pages (namely About and Contact Us) are intentionally left to be error not found pages

#
#### Additional features:
- There is an `instructions` toggle button at the top of the main page to learn how to navigate through the website.
- All code are divided into components.
- Notification bar is added; everytime a user adds a name to the name list; it will notify the user that it has been added, otherwise it will send an error.
- Added simple backend proxy to the root package.json, that way there is no CORS error.

#
#### Note: 
- In order to succesfully run the application, you must run it in dev mode; the easiest way is by running `yarn dev` on root folder which concurrently runs the client and backend.

#### Room for improvements: 
- Deploy entire application to heroku server; allows running it anywhere
- Though file structure is good and well maintained, can still make edits such as, creating a `client` folder for frontend
- Can add mixins to make it mobile responsive
- API calls to the backend can be moved to another file (such as `services.js`) -- removes code redundancy
- more? Let me know!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
