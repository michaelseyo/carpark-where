# Carpark-where

## Overview

A carpark availability checker system. Members have to create an account in order to use the system. For security purposes, the session lasts for 15 minutes before the member has to login again.

## Tech used:

- MongoDB
- Express
- React
- Node

MUI is used to create the various components and pages for the client.

For authentication, JWT is used. Everytime a member logs in, if the inputs are correct, the server sends a response with the token for the member to access protected routes like the checking of carpark availabilies and the member profile.

## Learning Points

On the client side, I initially stored the token in localStorage so that it would be globally available, but I thought that it wouldn't be so secure.

I decided to create a context with useContext react hook so that the state containing the necessary information for protected routes would be available to the child components. Every 15mins, it would refresh to verify the existing token and since the tokens are set to expire in 15mins, the tokens are stored only during the session.
