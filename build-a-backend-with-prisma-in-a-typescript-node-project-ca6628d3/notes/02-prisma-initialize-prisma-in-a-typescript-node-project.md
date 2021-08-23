# [Initialize Prisma in a TypeScript Node Project](https://egghead.io/lessons/prisma-initialize-prisma-in-a-typescript-node-project)

<TimeStamp start="0:04" end="0:12">

Simple web server:

```jsx
import express, {request, Response} from 'express';
const app = express();
app.get('/ping', (req: Request, res: Response)=>{
    res.json({message: 'hello'});
});
const PORT =3001;
app.listen(PORT);
console.log('Listening on http://loaclhost:$'{PORT}`);
```

</TimeStamp>

<TimeStamp start="0:14" end="0:25">

To send back dynamic data using Prisma you need to run the following:

 - `npm i -D prisma`

</TimeStamp>

<TimeStamp start="0:33" end="0:39">

We use this to access our database:

`npm i @prisma/client`

</TimeStamp>

<TimeStamp start="0:44" end="0:50">

Now we can run `npx prisma init` to initialize Prisma in this project. 

</TimeStamp>

<TimeStamp start="0:54" end="1:05">

After initializing Prisma, we can fin a directory called `prisma`, in this directory we'll fin the schema, there is where we describe our database, relationship between tables and other important information.

</TimeStamp>

<TimeStamp start="1:10" end="1:22">

Prisma supports multiple relational databases, such as Postgres,  MySQL, SQLite and SQL server. In this project we are going to work with SQLite

</TimeStamp>

<TimeStamp start="1:28" end="1:35">

Instead of pointing the database URL, we are going to pointed to a file;

```jsx
url = "file:./dev.db"
```

</TimeStamp>

<TimeStamp start="1:36" end="1:35">

Keep in mind this file is not created yet, but it will be created for us automatically once we run a command to get our initial migration in place. 

</TimeStamp>