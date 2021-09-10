# NoshFeast

## Introduction

NodeFeast is a takeout app where users can order food from registered restaurants, and will pick up their food after they receive an SMS notification.

## Final Product

![ How the App Works](https://github.com/NHadjiraIA/orderpickup/blob/main/pics/noshfeast-useronly.gif)

## Functionalities

As a user:

- View registered restaurants on google maps in app
- Leave comments and ratings on the restaurants
- Pay for the order through Stripe
- Receive SMS notifications when their order is being prepared and ready for pick up

As a vendor:

- View pending orders
- Update their menu
- View user comments

## Dependencies

Front-End:

- [React](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Axios](https://www.npmjs.com/package/axios)
- CSS

Back-End:

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- Sequelize
- Typescript

External API

- [Google Maps API](https://developers.google.com/maps)
- [Twilio](https://www.twilio.com/)
- [Stripe](https://stripe.com/en-gb-ca)

## **Front-end Server Setup**

Install dependencies with

```sh
cd <project-directory>
cd PickUpUI
npm install
```

Run the server:

```sh
npm start
```

## **Database SetUp/API Server Setup**

```sh
cd <project-directory>
cd PickUpApi
npm install
```

(If needed for the next step; Install [Postgres](https://www.postgresql.org).)

Log into Postgres as a user with superuser privileges. For example:

```sh
sudo -u postgres psql
```

(Change the configuration to set the username and password in PickUpApi>Infrastructure>db>config>config.json)

Execute the following to create the database and populate it with data:

`npx sequelize db:create`

`npx sequelize db:migrate`

`npx sequelize db:seed:all`

### API Server Setup

Run the API server:

```sh
cd <project-directory>/PickUpApi
npm run dev
```

## Set Up Twilio

These are the documents we referenced for setting up [Twilio](https://www.twilio.com/docs/sms/quickstart/node?code-sample=code-send-an-sms-using-twilio-with-nodejs&code-language=Node.js&code-sdk-version=3.x).

Make sure to sign up an account on Twilio and follow the guide to set up your Twilio functionalities in the back end.
