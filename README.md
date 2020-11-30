# NONG Code Challenge (Solution)

Thanks to all NONG team for proposing this challenge. I am very happy to participate on this and I hope my skills can be of your interest!

## About the Solution

This solution represents a web app built with React.js and Bootstrap that registers field notes taken on a crop scouting.
This solution contains the items required in the challenge:

- A form that is used to register a new note
- A list that shows the notes saved.
- A log out button

The form contains the items described. The list is ordered by date.

## Requirements Attended

- [x] Create-React-App was used to set up the web app.
- [x] For user authentication, Firebase Auth is used. Email and password authentication is used and a sign page was created.
- [x] To save the notes, Firebase Cloud Firestore is used.
      Each note is represented by a document in a notes collection.
- [ ] Material UI was not used in this project :(, because unfortunately I have no background on it yet, but I am sure I will be around there soon!
- [ ] Redux was not used yet. It is to be added later.
- [x] This app is hosted using firebase host: https://field-notes-bd18f.web.app/ .

## Development

In the project directory, the command

#### `npm start`

was used to start the app and render the project locally.
It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploy

The deploy was done using Firebase Host, first

#### `npm build`

was run to build the app for production, then

#### `npm install -g firebase-tools`

#### `firebase login`

#### `firebase init`

#### `firebase deploy`

were run to setup the project for firebase host and then deploy to it.
