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

---

### Classes Overview

| Method | Endpoint                                   | Requires                                                          | Description                                    |
| ------ | ------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------- |
| POST   | `/api/classes/`                            | Successful Login, `name`, `location`, `instructor_id`, `dateTime` | Used to add a new class to the database.       |
| GET    | `/api/classes/`                            | Successful Login                                                  | Used to show all classes in the database.      |
| GET    | `/api/classes/:id/`                        | Successful Login                                                  | Used to show a specific class in the database. |
| GET    | `/api/users/:id/classes/` Successful Login | Used to show all classes belonging to a specific user.            |
| PUT    | `/api/classes/:id/`                        | Successful Login                                                  | Used to edit a specific class.                 |
| DELETE | `/api/classes/:id/`                        | Successful Login                                                  | Used to delete a specific class.               |

---

### Add Class

Method used: **[POST]** `/api/classes/`

On Success: Returns the Id of the new class.

Parameters:

| Parameter Name | Type               | Required                          | Notes                                                                |
| -------------- | ------------------ | --------------------------------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | Acquired from a successful login. |
| Instructor     | Key in User Object | yes                               | User must have the `Instructor` parameter set to *true* in database. |
| name           | string             | yes                               | The name of the class.                                               |
| type           | string             | no                                | The class's type. Examples: High Intensity, Yoga                     |
| location       | string             | yes                               | The place where the class takes place.                               |
| instructor_id  | integer            | yes                               | The `id` of the user who instructs this class.                       |

Example of what to use:

```
{
    name: "Cardio Kickboxing",
    type: "cardio",
    location: "123 Main St",
    instructor_id: 1,
}
```

---

### Get Classes

Method used: **[GET]** `/api/classes/`

On Success: Returns an array of classes.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Specific Class

Method used: **[GET]** `/api/classes/:id`

On Success: Returns an array with just the class specified.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Classes By User Id

Method used: **[GET]** `/api/users/:id/classes/`

On Success: Returns an array with just the classes belonging to the specified user.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Update Class

Method used: **[PUT]** `/api/classes/:id`

On Success: Returns `1`, or returns `0` if class could not be updated.

Parameters:

| Parameter Name | Type               | Required | Notes                                                                |
| -------------- | ------------------ | -------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                    |
| Instructor     | Key in User Object | yes      | User must have the `Instructor` parameter set to *true* in database. |
| name           | string             | no       | The name of the class.                                               |
| type           | string             | no       | The class's type. Examples: High Intensity, Yoga                     |
| location       | string             | no       | The place where the class takes place.                               |
| instructor_id  | integer            | no       | The `id` of the user who instructs this class.                       |

---

### Delete Class

Method used: **[DELETE]** `/api/classes/:id`

On Success: Returns `1`, or returns `0` if class could not be deleted.

Parameters:

| Parameter Name | Type               | Required | Notes                                                                |
| -------------- | ------------------ | -------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                    |
| Instructor     | Key in User Object | yes      | User must have the `Instructor` parameter set to *true* in database. |

[Top](#endpoints)

---

### Passes Overview

| Method | Endpoint                                  | Requires                                              | Description                                   |
| ------ | ----------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| POST   | `/api/passes/`                            | Successful Login, `client_id`, `class_id`             | Used to add a new class to the database.      |
| GET    | `/api/passes/`                            | Successful Login                                      | Used to show all passes in the database.      |
| GET    | `/api/passes/:id/`                        | Successful Login                                      | Used to show a specific pass in the database. |
| GET    | `/api/users/:id/passes/` Successful Login | Used to show all passes belonging to a specific user. |
| PUT    | `/api/passes/:id/`                        | Successful Login                                      | Used to edit a specific pass.                 |
| DELETE | `/api/passes/:id/`                        | Successful Login                                      | Used to delete a specific pass.               |

---

### Add Pass

Method used: **[POST]** `/api/passes/`

On Success: Returns the Id of the new class.

Parameters:

| Parameter Name | Type               | Required | Notes                                                            |
| -------------- | ------------------ | -------- | ---------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                |
| Client         | Key in User Object | yes      | User must have the `Client` parameter set to *true* in database. |
| client_id      | integer            | yes      | The `id` of the user who bought the pass.                        |
| class_id       | integer            | yes      | The `id` of the class the pass belongs to.                       |
| timesUsed      | integer            | no       | The number of times the pass has been used. Defaults to 0.       |
| completed      | boolean            | no       | Should be set to *true* when `timesUsed` reaches 10.             |

Example of what to use:

```
{
    client_id: 1,
    class_id: 1,
    timesUsed: 0,
    completed: false
}
```

---

### Get Passes

Method used: **[GET]** `/api/passes/`

On Success: Returns an array of passes.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Specific Pass

Method used: **[GET]** `/api/passes/:id`

On Success: Returns an array with just the pass specified.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Passes By User Id

Method used: **[GET]** `/api/users/:id/passes/`

On Success: Returns an array with just the passes belonging to the specified user.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Update Pass

Method used: **[PUT]** `/api/passes/:id`

On Success: Returns `1`, or returns `0` if class could not be updated.

Parameters:

| Parameter Name | Type               | Required | Notes                                                            |
| -------------- | ------------------ | -------- | ---------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                |
| Client         | Key in User Object | yes      | User must have the `Client` parameter set to *true* in database. |
| client_id      | integer            | no       | The `id` of the user who bought the pass.                        |
| class_id       | integer            | no       | The `id` of the class the pass belongs to.                       |
| timesUsed      | integer            | no       | The number of times the pass has been used. Defaults to 0.       |
| completed      | boolean            | no       | Should be set to *true* when `timesUsed` reaches 10.             |

---

### Delete Pass

Method used: **[DELETE]** `/api/passes/:id`

On Success: Returns `1`, or returns `0` if pass could not be deleted.

Parameters:

| Parameter Name | Type               | Required | Notes                                                            |
| -------------- | ------------------ | -------- | ---------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                |
| Client         | Key in User Object | yes      | User must have the `Client` parameter set to *true* in database. |
|                |

[Top](#endpoints)

---

### Sessions Overview

| Method | Endpoint                                      | Requires                                                            | Description                                      |
| ------ | --------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| POST   | `/api/sessions/`                              | Successful Login with **Instructor status**, `class_id`, `dateTime` | Used to add a new session to the database.       |
| GET    | `/api/sessions/`                              | Successful Login                                                    | Used to show all sessions in the database.       |
| GET    | `/api/sessions/:id/`                          | Successful Login                                                    | Used to show a specific session in the database. |
| GET    | `/api/classes/:id/sessions/` Successful Login | Used to show all sessions belonging to a specific class.            |
| PUT    | `/api/sessions/:id/`                          | Successful Login with **Instructor status**                         | Used to edit a specific session.                 |
| DELETE | `/api/sessions/:id/`                          | Successful Login with **Instructor status**                         | Used to delete a specific session.               |

---

### Add Session

Method used: **[POST]** `/api/sessions/`

On Success: Returns the Id of the new session.

Parameters:

| Parameter Name | Type               | Required | Notes                                                                |
| -------------- | ------------------ | -------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                    |
| Instructor     | Key in User Object | yes      | User must have the `Instructor` parameter set to *true* in database. |
| class_id       | integer            | yes      | The `id` of the class group that this session is associated with.    |
| dateTime       | datetime           | yes      | The time and date the session takes place.                           |

Example of what to use:

```
{
    class_id: 1,
    dateTime: "2019-08-30 18:00:00"
}
```

---

### Get Sessions

Method used: **[GET]** `/api/sessions/`

On Success: Returns an array of sessions.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Specific Session

Method used: **[GET]** `/api/sessions/:id`

On Success: Returns an array with just the session specified.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Get Sessions By Class Id

Method used: **[GET]** `/api/classes/:id/sessions/`

On Success: Returns an array with just the sessions belonging to the specified class.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---

### Update Session

Method used: **[PUT]** `/api/sessions/:id`

On Success: Returns `1`, or returns `0` if session could not be updated.

Parameters:

| Parameter Name | Type               | Required | Notes                                                                |
| -------------- | ------------------ | -------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                    |
| Instructor     | Key in User Object | yes      | User must have the `Instructor` parameter set to *true* in database. |
| class_id       | integer            | no       | The `id` of the class group that this session is associated with.    |
| dateTime       | datetime           | no       | The time and date the session takes place.                           |

---

### Delete Session

Method used: **[DELETE]** `/api/sessions/:id`

On Success: Returns `1`, or returns `0` if session could not be deleted.

Parameters:

| Parameter Name | Type               | Required | Notes                                                                |
| -------------- | ------------------ | -------- | -------------------------------------------------------------------- |
| Authorization  | **Header**         | yes      | Acquired from a successful login.                                    |
| Instructor     | Key in User Object | yes      | User must have the `Instructor` parameter set to *true* in database. |

[Top](#endpoints)