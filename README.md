
# BOARD INFINITY BACKEND HACKATHON

A REST API in nodejs with mongodb as database for creating tasks with a duration, the tasks are deleted after the given duration is over.

```
Name: Md Dawood Razauddin
Roll no.: 1729034
Branch: Computer Science and Communication Engineering
Organisation: KIIT School of Computer Engineering
```

## Day wise approach

### 07-September-2020
* Learnt how to setup Node and ExpressJs.
* Learnt how to connect with MongoDB Atlas.
* Learnt how to use Postman for accessing api end points.

### 08-September-2020
* Set up the git repository.
* Created both the end points viz. '/add' and '/list'.
* Added the auto delete functionality.
* Deployed on Heroku.

## Heroku link
* [Task-App-Heroku](https://board-infinity.herokuapp.com/)

## link to the end points:
* ['/add'](https://board-infinity.herokuapp.com/add)
* ['/list'](https://board-infinity.herokuapp.com/list)
The above mentioned end points can be accessed using ['Postman'](https://www.postman.com/)

## Packages used
* express
* mongoose
* body-parser
* nodemon
* dotenv

## Structure for adding Tasks
```
{
    "TaskName": "name of the task",
    "TaskDescription": "task description",
    "creator": "name of the creator",
    "duration": "time duration in minutes(integer value)"
}
```
