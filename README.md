# MEVN Pokemon Library
## Overview
Here I have built a fullstack MEVN app of a Pokemon Library whilst assisting as a Teaching Assistant for Students on a Bootcamp Course

## Technical Parts
* Created an Express API with a Mongoose Database, which has full CRUD capabiities
* Serving the API on a Vue.js frontend
* Created authentication using google OAuth
* CUD from the CRUD are protected behind authentication

## Built with
* Express
* Node.js
* Mongoose
* MongoDB
* Postman
* Vue.js
* JSX
* CSS
* Bootstrap
* Git
* Netlify 

## Key Features
* Added a seed.js file in the backend so I can clean up my database & add the original pokemon back in nice and fast when need be
* Easy logging in with Google 
* Create, Update & Delete functionality locked, so users have to be logged in in order to create. Users must also be the owner of the item which they are attempting to update or delete (as seen in the third screenshot below).

## Deployed Version
[View the deployed version of the app](https://pokemon-mevn-frontend.netlify.app/)

![Screen Grab of Home Page](./assets/homePage.png)

![Screen Grab of Index Page](./assets/indexPage.png)

![Screen Grab of Show Pokemon Page](./assets/showPage.png)

## Challenges 
* I often worked on this Project in evenings or when I had a moment spare from the General Assembly Bootcamp which I am a TA on, due to this it was sometimes difficult to find enough time to get the work which I wanted to do each day done.
* The biggest challenge code wise was ensuring that my logged in state travelled with me throughout the app. Once discovering 'Provide' & 'Inject' I was able to track my logged in state & neaten up my code significantly.
* Creating the isOwner function to ensure a logged in person is the owner of the item which they want to edit or delete. In order to implement this I used the unqiue sub which is proivided when logging in to google OAuth and saved this sub in my database for each logged in user. If the unique sub of the logged in user matches the unique sub of the user who created the item, then they will see edit & delete functionality. 

## Wins & Key Learnings 
* Managing to complete 99% of this project in a week is a big win. While its not the most complicated project in the world it was juggled with having to dive in to students code to debug & find answers.
* Whilst doing this project myself it enabled me to assist the cohort of students I curently have way more when they had issues or speific problems - because a lot of the time I had encountered them as well 😅
* I only scratched the surface with Vue.js & would like to dive deeper! However the next project for the cohort is now React so I'll be playing with React again next! 