<h1 align="center">
  <img alt="Rocketseat" height="80" title="Rocketseat" src="https://avatars.githubusercontent.com/u/28929274?s=200&amp;v=4" />
</h1>

<p align="center">
  <img alt="NLW Return edition 08" src="https://user-images.githubusercontent.com/51727640/167922155-8f18c6ae-e221-4a54-b9eb-d2358f739937.svg" />
</p>

![Cover](https://user-images.githubusercontent.com/51727640/167926346-1df2d26c-47e6-4e3f-abb9-322b1e7120b4.svg)

## 💻 Project
Application initially developed by the Rocketseat Team aimed at creating a Widget for users to leave feedback about the page they are visiting.

## 🤓 Personal Objective
By participating in the 8th edition of NLW, I was challenged by Rocketseat to extend the original project by adding new functionalities.
<br />
After a lot of learning at the event, I decided to throw my hat over the wall and go fetch it (Phrases from Diego.com haha).
<br />
I thought about using this project somewhere it would really make sense, and I realized the NLW website did not have this functionality, so I did it. 😆😅
<br />
Of course, I tried to simulate as closely as possible within the available time something similar to the NLW page. And it was worth it; I learned more tools and ways to develop an application, all the learning was listed in the topics below.

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/file/0I7xmihyTotW3IvYHmVjp6/Feedback-Widget-(Community)?type=design&node-id=100%3A2114&mode=dev&t=efUGs5mJOLt8fL1y-1). 
You must have an account on [Figma](http://figma.com/) to access it.
<br />
<br />
Access the front-end from [this link](https://nlw-return-impulse-web-woad-eight.vercel.app/).
<br />
<br />
Back-end not hosted 

## ✨ Technologies

### Front-end
-   [ ] Figma
-   [ ] ReactJS
-   [ ] Vite
-   [ ] Javascript
-   [ ] Typescript
-   [ ] Context API
-   [ ] Headless UI
-   [ ] Tailwind
-   [ ] Local Storage
-   [ ] Phosphor Icons
-   [ ] Axios
-   [ ] React router DOM
-   [ ] HTML2CANVAS

### Back-end
-   [ ] Express
-   [ ] Javascript
-   [ ] Typescript
-   [ ] Prisma
-   [ ] Jest
-   [ ] Sqlite
-   [ ] Postgresql
-   [ ] Migrations
-   [ ] SWC
-   [ ] Cors
-   [ ] Nodemailer

## :hammer_and_wrench: Features 

### Front-end
-   [ ] User feedback submission in the form of text and image.
-   [ ] After feedback registration, an email is forwarded to the user by the back-end (Development environment only).
-   [ ] Lists the feedbacks from the server that the user has registered (In real use, this page should be better located within the project);
-   [ ] Listed feedbacks show data such as ID, feedback type, comment, and the recorded screenshot
-   [ ] Page adapts to most devices due to its responsiveness
-   [ ] Allows changing the page theme between dark and light, which is saved even after reloading the page.
-   [ ] Allows increasing or decreasing the page font size
-   [ ] Default page for site areas that are under development
-   [ ] Allows the user to navigate according to their context.

### Back-end
-   [ ] Back-end built on a REST application basis
-   [ ] Allows registering feedback via HTTP POST method
-   [ ] Allows querying feedbacks via HTTP GET method
-   [ ] Has unit tests (npm run test)
-   [ ] Implements SOLID concepts
-   [ ] Sends email to a user (Development environment only)
-   [ ] Uses the ORM Prisma as intermediaries in database operations
-   [ ] Initially developed with SQLite, later changed to Postgresql in development and production environments
-   [ ] Configured to transpile typescript code to javascript, command npm build.

## Running the project

### Front-end
Use **yarn** or **npm install** to install the project's dependencies.
Then, start the project.

```cl
npm run dev
```

Remember to set in the .env file the access configurations to your back-end server.
 
 ```cl
VITE_API_URL=http://localhost:3333/
```

### Back-end
Use **yarn** or **npm install** to install the project's dependencies.
Then, start the project.

```cl
npm run dev
```

Remember to define in the .env file the configurations of your back-end server with the database, the project is configured for PostgreSQL.
 
 ```cl
DATABASE_URL=
```


## 📄 License

This project was initially developed by
