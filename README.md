# Carpark-where

## Deployed [here](https://carparkwhere.netlify.app/)!

## Overview

---

A carpark availability checker system. Data retrieved from [here](https://data.gov.sg/dataset/carpark-availability).

Members have to create an account in order to use the system. For security purposes, the session lasts for 15 minutes before the member has to login again.

## Using the API

---

### Backend API: https://my-carpark-api.herokuapp.com/

Can use [Postman](https://www.postman.com/) for testing out the requests.

Token is obtained on making a POST request containing the email and password of the registered account to the api/login route.

### api/register:

```
- Creates an account
- Account details are returned as a response (excluding password)
- POST request

In the request JSON body:
- required fields: firstName, lastName, email, password
- Optional field: contactNumber
```

### api/login:

```
- Login
- A token and memberId is sent to the client as response
- POST request

In the request JSON body:
- email
- password
```

### api/details/memberId:

```
- (Protected Route) Retrieves member details
- GET request

Request Headers:
- Authorization: Bearer <token>
```

### api/availability:

```
- (Protected Route) Retrieve carpark data
- GET request

Request Headers:
- Authorization: Bearer <token>
```

---

## Tech used:

- MongoDB
- Express
- React
- Node

MUI is used to create the various components and pages for the client.

For authentication, JWT is used. Everytime a member logs in, if the inputs are correct, the server sends a response with the token for the member to access protected routes like the checking of carpark availabilies and the member profile.

---

## Learning Points

I learnt a lot about how authentication works with JWT tokens and creating protected routes when making this. I also learnt about encryption of passwords and decrypting them using bcrypt for security purposes.

On the client side, I initially stored the token in localStorage so that it would be globally available, but I thought that it wouldn't be so secure.

I decided to create a context with useContext react hook so that the state containing the necessary information for protected routes would be available to the child components. Every 15mins, it would refresh to verify the existing token and since the tokens are set to expire in 15mins, the tokens are stored only during the session.
