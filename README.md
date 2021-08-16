# React-Node-OAuth2-backend -> The Repository for the Backend of the React-Node-OAuth project

## Introduction

Development Branch -> For coding locally (start by running "yarn run dev")
Main Branch -> For production builds and deploying (start by running "yarn build" then "yarn start")

This is the Github Repo I recreated after following the video of NathanielWoodbury on Youtube.

That video can be found here: https://www.youtube.com/watch?v=cD17CYA1dck&ab_channel=NathanielWoodbury

This code is ready to be deployed to Heroku (it is production ready on the main branch)

Dependency list and explanation for each item -> https://github.com/Coderunner2077/React-Node-OAuth2-backend/blob/main/notes.txt

When deploying this code ensure that you fill out the ENVIORNMENT variables when deploying, so that the application runs.

## Related Projects:

* https://github.com/woodburydev/oauth-video -> Instead of Using Twitter strategy I used Facebook one
* https://github.com/TyranReacts/React-Node-OAuth2-frontend -> Frontend of the api I reacreated after watching the same video

Ensure *ALL* Auth providers match your respective backend endpoints:

* Google -> https://console.developers.google.com/apis/dashboard
* Facebook -> https://developers.facebook.com/apps
* Github -> https://github.com/settings/developers

## For Development:

* Switch to "Development" branch (git rebase -b Development)
* Fill out .env file with your secrets
* Make sure all auth providers are setup for http://localhost:4000
* Start ("yarn run dev")

## For Production:

* Switch to main branch (git rebase -b main)
* Fill out .env file with your secrets
* Make sure all auth providers are setup for your heroku app you made
