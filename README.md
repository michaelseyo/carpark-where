# Carpark-where

## Deployed [here](https://carparkwhere.netlify.app/)!

## Overview

A carpark availability checker system. Data retrieved from [here](https://data.gov.sg/dataset/carpark-availability).

Members have to create an account in order to use the system. For security purposes, the session lasts for 15 minutes before the member has to login again.

## Using the API

### Backend API: https://my-carpark-api.herokuapp.com/

Can use [Postman](https://www.postman.com/) for testing out the requests.

Token is obtained on making a POST request containing the email and password of the registered account to the api/login route.

### api/register:

- Creates an account
- POST request

In the request JSON body:

- Required fields: firstName, lastName, email, password

```
{
    "firstName": "test",
    "lastName": "me",
    "email": "test3@test.com",
    "password": "test"
}
```

- Optional field: contactNumber

```
{
    "firstName": "test",
    "lastName": "me",
    "email": "test4@test.com",
    "password": "test"
    "contactNumber": "12345678"
}
```

Response:

```
{
    "message": "Account created",
    "request": {
        "type": "GET",
        "description": "Get details of member",
        "url": "https://my-carpark-api.herokuapp.com/api/details/6224aa01309d2d07a3975c61"
    }
}
```

### api/login:

- Login
- A token and memberId is sent to the client as response
- POST request

In the request JSON body:

```
{
    "email": "test2@test.com",
    "password": "test"
}
```

Response:

```
{
    "message": "Auth successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJJZCI6IjYyMjRhODM4ZDEwOWYzMzZjYzU2OGUwNyIsImVtYWlsIjoidGVzdDJAdGVzdC5jb20iLCJpYXQiOjE2NDY1Njk2NjEsImV4cCI6MTY0NjU3MDU2MX0.Jeb4y18m3BX3KeIyRNOTGZAJSZ6KIdoQYg-e0Uy_lKk",
    "id": "6224a838d109f336cc568e07"
}
```

### api/details/memberId:

- (Protected Route) Retrieves member details
- GET request

Request Headers:

```
Authorization: Bearer <token>
```

Response:

```
{
    "_id": "6224a838d109f336cc568e07",
    "firstName": "test",
    "lastName": "me",
    "email": "test2@test.com"
}
```

### api/availability:

- (Protected Route) Retrieve carpark data
- GET request

Request Headers:

```
Authorization: Bearer <token>
```

Response:

```
{
    "message": "Current carpark availabilites were fetched",
    "data": ...
}
```

## Tech used:

- MongoDB
- Express
- React
- Node

MUI is used to create the various components and pages for the client.

For authentication, JWT is used. Everytime a member logs in, if the inputs are correct, the server sends a response with the token for the member to access protected routes like the checking of carpark availabilies and the member profile.

## Learning Points

I learnt a lot about how authentication works with JWT tokens and creating protected routes when making this. I also learnt about encryption of passwords and decrypting them using bcrypt for security purposes.

On the client side, I initially stored the token in localStorage so that it would be globally available, but I thought that it wouldn't be so secure.

I decided to create a context with useContext react hook so that the state containing the necessary information for protected routes would be available to the child components. Every 15mins, it would refresh to verify the existing token and since the tokens are set to expire in 15mins, the tokens are stored only during the session.
