# Tweeter Clone

## Requirements

- Node v14
- npm v6
- mysql

## Getting Started

After ensuring that you meet the above requirements, follow the below procedures for installing

### Clone this repo

```shell
$ git clone git@github.com:erisitohang/post.git post
$ cd post
```

### Run NPM

This assumes you have npm installed and configured to run globally

```shell
$ npm istall

```

### Environment Configuration

```shell
$ cp .env.example .env
```

After this file copy, update the attributes in .env to match your environment, database

### Run Migration

```shell
$ npm run db:migrate
```

### Seed the Database

```shell
$ npm run db:seed
```

### Run application

```shell
$ npm run start
```

### API

### Login

POST /api/auth/login

#### Request

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjExMjkwNjEyLCJleHAiOjE2MTEyOTQyMTJ9.agi3Ejfmd6wqCeR89dEH-JdPoTLcMWo0lMJUu93povI",
  "access_token_expiry": 1611294212
}
```

### Register

POST /api/auth/register

#### Request

```json
{
  "name": "Full Name",
  "email": "user@example.com",
  "password": "password123"
}
```

### My Post

GET /api/posts

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Response

```json
[
  {
    "id": 1,
    "post": "My post"
  }
]
```

### Other user Post

GET /api/posts/followed

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Response

```json
[
  {
    "id": 2,
    "post": "My post"
  }
]
```

### View Post

GET /api/posts/:id

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Response

```json
{
  "id": 2,
  "post": "My post"
}
```

### Create Post

POST /api/posts

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Request

```json
{
  "post": "Lorem ipsum"
}
```

### Update Post

PUT /api/posts

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Request

```json
{
  "id": 10,
  "post": "My Post 10"
}
```

### Delete Post

DELETE /api/posts/:id

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

### Follow user

POST /api/followers

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Request

```json
{
  "followed_id": 20
}
```

### Unfollow user

DELETE /api/followers/:id

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

### Like post

POST /api/likes

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```

#### Request

```json
{
  "post_id": 1
}
```

### Unlike post

DELETE /api/likes/:id

#### Header

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1Ni"
}
```
