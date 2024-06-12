# Cloud Computing Documentation

## Table of Content

- [Cloud Computing Documentation](#cloud-computing-documentation)
  - [Diagram Architecture](#diagram-architecture)
  - [Firestore Database Scheme](#firestore-database-scheme)
  - [Tech Stack](#tech-stack)
  - [Dependencies](#dependencies)
  - [Endpoint Routes](#endpoint-routes)
  - [API Docs](#api-endpoint)
- [Contributor](#contributor)

## Diagram Architecture

![image](https://github.com/mikhaelsiallagan/snapcal-backend/assets/88528641/f9e0f765-2e52-4307-a0fd-d4c59c9af2e6)

## Firestore Database Scheme
![Untitled Diagrqqam drawio](https://github.com/mikhaelsiallagan/snapcal-backend/assets/88528641/dd32114b-bcee-4302-8037-05b35925b2e7)

## Tech Stack

- Node.js
- Express.js
- App Engine
- Cloud Storage
- Tensorflow Lite
- Firestore

## Dependencies

- [**@google-cloud/firestore**](https://www.npmjs.com/package/@google-cloud/firestore) - Version: ^7.11.1
- [**bcrypt**](https://www.npmjs.com/package/bcrypt) - Version: ^5.1.1
- [**dotenv**](https://www.npmjs.com/package/dotenv) - Version: ^16.4.5
- [**express**](https://www.npmjs.com/package/express) - Version: ^4.19.2
- [**firebase-admin**](https://www.npmjs.com/package/firebase-admin) - Version: ^12.1.1
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) - Version: ^9.0.2
- [**multer**](https://www.npmjs.com/package/multer) - Version: ^1.4.5-lts.1
- [**nodemon**](https://www.npmjs.com/package/nodemon) - Version: ^3.1.0

## Endpoint Routes
| Route                                | HTTP Method | Description                 | Auth         |
| ------------------------------------ | ----------- | --------------------------- | ------------ |
| /                                    | GET         | First route                 | Required     |
| /auth/register                       | POST        | Register for new user       | Not Required |
| /auth/login                          | POST        | Log in for user             | Not Required |
| /auth/logout                         | POST        | Log out from account        | Required     |
| /auth/delete-account                 | DELETE      | Delete user account         | Required     |
| /auth/reset-password                 | PUT         | Reset account password      | Required     |
| /user/profile-details                | GET         | Get Profile Details         | Required     |
| /user/profile-details                | PUT         | Update Profile Details      | Required     |
| /user/profile-details/upload-photo   | POST        | Upload photo profile user   | Required     |



