# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

I've gotten this project in a solid state, but would like to document a few things here:

- To properly load weather data, you must also start the backend server in the ```backend``` directory by 
running ```npm start``` inside that directory.

- While I was able to coerce the Antd library to look fairly close to the screenshots given, I was forced to use 
a variety of CSS styling techniques, including using ```!important``` directives occasionally. I would much rather have
avoided this (inline styles too) but I considered a good-looking end result to be higher priority in this case than
long-term practices. I also made a few styling decisions based simply on speed.

- I chose not to use a CSS preprocessor in this case, but in hindsight probably should have. It certainly would have made
the stylesheet files less verbose!

Thank you for reviewing my submission and for your time and consideration!

- Taylor Eernisse