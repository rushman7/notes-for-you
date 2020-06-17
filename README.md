Notes For You is a small note-taking app created with React + Redux. A small node/express.js server was created to support the data persisting and saving to the database. 
**[Link](https://notes-for-you.netlify.com/)**  

##### Stack:
- React.js:
    - Based on **reusable components** to build an entire app
    - High performance with the **virtual DOM**
    - Powerful **dev tools** for faster debugging

- Redux.js:
    - **Reducers** used to call from server.
    - Easier to track **error** logs
    - Powerful **dev tools** for faster debugging

- Node/Express.js:
    - **CRUD** from express
    - Manages routes, requests, and data


<img src="https://media.giphy.com/media/2bV9hetdWBRsX49bHS/giphy.gif"/>

# Notes For You Backend

## Getting Started (Online)

The API can be found at the following url:

```
https://notes-for-you.herokuapp.com/
```

## Getting Started (Local)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

## Endpoints

---

### Get Notes

Method used: **[GET]** `/api/notes/`

On Success: Returns an array of notes.

---

### Get Specific Note

Method used: **[GET]** `/api/notes/:id`

On Success: Returns an array with just the note specified.

---

### Post Note

Method used: **[POST]** `/api/notes/`

On Success: Returns `note added!`, or returns `note not added!` if note could not be added.

Parameters:

| Parameter Name | Type       | Required | Notes                                                                                 |
| -------------- | ---------- | -------- | ------------------------------------------------------------------------------------ |
| title          | string     | yes       | The notes title.                                                                     |
| content        | string     | yes       | The notes content.         
                         
---

### Update Note

Method used: **[PUT]** `/api/notes/:id`

On Success: Returns `note updated!`, or returns `note not found!` if note could not be updated.

Parameters:

| Parameter Name | Type       | Required | Notes                                                                                 |
| -------------- | ---------- | -------- | ------------------------------------------------------------------------------------ |
| title          | string     | yes       | The notes title.                                                                     |
| content        | string     | yes       | The notes content.         

---

### Delete Note

Method used: **[DELETE]** `/api/notes/:id`

On Success: Returns `1 note deleted`, or returns `note with that ID not found` if note could not be deleted.

[Top](#endpoints)
