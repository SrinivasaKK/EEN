# CameraList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Brief Explanation of working of this application

1. The application starts at route `/login`. The Login component has login form where user can enter credentials and login.
   Assumptions made:
1. User name cannot be empty and can have max of 50 characters
1. password cannot be empty and should have minimum of 8 characters and max of 50 characters

1. Once user is successfully authenticated, routed to `/cameras` where the list of cameras for the particular account are listed

1. Clicking on camera card will take user to `/cameras/cameraId`, where few details are fetched and displayed

1. Logout will kill the session and clear all tokens and other storage variables.

## Features developed

1. User cannot directly go to `/cameras` without being authenticated first. I have implemented route guard for this purpose to check if the route can be accessed or not.

2. Have used HTTP Interceptors such that the bearer token is included in every subsequent request after login.

3. Extensively used local storage to cache the values and avoid redundant api calls. For ex: If user wants to check the details of same camera multiple times, no api calls are made after 1st request.

4. Extensively used Types on variables and functions to avoid errors during compile time.

5. Have used Models for each API returned responses.

6. Design is fairly Simple and simple. Used Angular material and css flex for it. No fancy designs.
