# MarketingTool
Project implemented by  Hadjira Haya

## Introduction

MarketingTool is a takeout app where users can see the potential investment opportunities that he can sign up for.
and the marketer can add a bank branch or offer.

## Dependencies

Front-End:

- [React](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Axios](https://www.npmjs.com/package/axios)
- CSS

Back-End:

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- Typescript

External API

- [Google Maps API](https://developers.google.com/maps)

## **Front-end Server Setup**

```sh
cd <MARKETINGTOOL>
cd MarketingToolUI
npm install
npm start
```

Run the server:

```sh
cd <MARKETINGTOOL>
cd MarketingToolApi
npm install
npm start
```




## Set Up Google Maps Api Key

- Make a file: mapAPIKey.js, in MarketingToolUI>src folder.
And include the file in .gitignore

- Make a variable for the google maps api

e.g.
  const API = "<google maps api key>"
  export default API