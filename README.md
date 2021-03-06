# React-Node-OAuth2-backend -> The Repository for the Backend of the React-Node-OAuth project

## Introduction

Development Branch -> For coding locally (start by running "yarn run dev")  
Main Branch -> For production builds and deploying (start by running "yarn build" then "yarn start")  

This is the Github Repo I recreated after following the video of NathanielWoodbury on Youtube.  

That video can be found here: https://www.youtube.com/watch?v=cD17CYA1dck&ab_channel=NathanielWoodbury  

This code is ready to be deployed to Heroku (it is production ready on the main branch)  

Dependency list and explanation for each item -> https://github.com/Coderunner2077/React-Node-OAuth2-backend/blob/main/notes.txt  

When deploying this code ensure that you fill out the ENVIORNMENT variables when deploying, so that the application runs.  

## Environment variables
The only environment variables you need to set for the backend are the following:  
**CLIENT_ORIGIN** -> The client origin url from your frontend.  
**ATLAS_URI** -> The uri endpoint of your MongoDB database  
**GOOGLE_CLIENT_ID** -> OAuth2 Google Client ID  
**GOOGLE_CLIENT_SECRET** -> OAuth2 Google Client Secret  
**FACEBOOK_CLIENT_ID** -> OAuth2 Facebook Client ID  
**FACEBOOK_CLIENT_SECRET** -> OAuth2 Facebook Client Secret  
**GITHUB_CLIENT_ID** -> OAuth2 Github Client ID  
**GITHUB_CLIENT_SECRET** -> OAuth2 Github Client Secret

## Related Projects:

* [Woodburydev Github Project](https://github.com/woodburydev/oauth-video) -> Instead of Using Twitter strategy I used Facebook one  
* [React Node OAuth Frontend](https://github.com/Coderunner2077/React-Node-OAuth2-frontend) -> Frontend of the api I reacreated after watching the same video  


Ensure **_ALL_** Auth providers match your respective backend endpoints:  

* Google -> https://console.developers.google.com/apis/dashboard  
* Facebook -> https://developers.facebook.com/apps  
* Github -> https://github.com/settings/developers

## For Development:

* Switch to "Development" branch (git rebase -b Development)  
* Fill out .env file with your secrets  
* Make sure all auth providers are setup for http://localhost:4000  
* Start ("yarn dev")

## For Production:

* Switch to main branch (git rebase -b main)  
* Fill out .env file with your secrets  
* Make sure all auth providers are setup for your heroku app you made
* Start ("yarn start")
