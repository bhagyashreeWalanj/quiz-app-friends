# QUIZ APP - 'FRIENDS' Tv show Trivia App

> This is an implemenation of the Quiz app based on Reactjs ans useContext feature.

## Project information

- Developed using React,Typescript, react-hooks.
- Tested using Jest and Enzyme.
- React Version `^16.13.0`
- Node version `v14.17.3` (LTS)
- Running Application available on [Netlify](https://getir-todo-bhagyashree.netlify.app/)

## Project structure

- `src` Base app files.
- `src/components` Reusable components,
- `src/styles` folder for css files
- `src/helper` folder for context and mock data files

## Technical Documentation

1. Users start a trivia by clicking a button 'Take a Quiz'
2. Users can able to select multiple choice options from quiz.
3. If answer is correct, it will change color to green else it will show red color.
4. This quiz has 5 questions to answer.
5. In the end of the quiz, there is success page to show quiz scores.
6. If scores more than 1 point , then it will show friends dance gif.
7. If scores less than 1 point, it will show joey's quote gif.
8. If user wants to quit the quiz, Home button can lead to main page.

## Third Party Libraries

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [React / create-react-app](https://github.com/facebook/create-react-app)

- [React Icons](https://react-icons.github.io/react-icons) for icons

## Quiz app's

If I had a little more time to invest on this code assignment, I would probably
focus on:

- Implement Previous button to go back to previous question.
- Responsive Page
- Implementation of mock api and get questions/answers by axios.
- Add Random/manual question feature.
- On single select of answer button, other option buttons should be disabled.

## Project commands

### Install dependencies

```zsh
npm i
```

### Running the project

```zsh
# (make sure dependencies have been installed before.)
npm start
```

### Executing tests

This project contains an extensive suite of tests and makes use of [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme).

Run all tests by executing.

```zsh
# (make sure dependencies have been installed before.)
npm test
```

```zsh
npm run test -- -u
```
