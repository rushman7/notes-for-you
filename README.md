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