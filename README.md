# QUIZ MANIA
### A simple quiz app where you will get 15 questions once and 30 minutes to submit. Also The web app is completely responsive.
<br>

## Contributors

- [Partha](https://www.github.com/partha7978)
<br><br>

## Screenshots

### Big Screen ( > 900px )

| Popup Page | Question Page | Result Page |
| :---: | :---: | :---: |
| ![App Screenshot](./public/readmeScreenshot/popupLarge.png) | ![App Screenshot](./public/readmeScreenshot/questionPageLarge.png) | ![App Screenshot](./public/readmeScreenshot/resultLarge.png) |

<br>

### Small Screen ( < 600px )

| Popup Page | Question Page | Result Page |
| :---: | :---: | :---: |
| ![App Screenshot](./public/readmeScreenshot/popupSmall.png) | ![App Screenshot](./public/readmeScreenshot/questionPageSmall.png) | ![App Screenshot](./public/readmeScreenshot/resultSmall.png) |

<br>

## Program Structure and Processing

I have created, 4 main components as ``` Navbar, Popup, Question, Result ```.

* Inside Navbar,  contains the logo and a 30 minutes ``` Timer ``` component.
* From the start, the ``` Popup ``` will show and ask for the email id.
* After submission of the valid email, I have used react-router-dom, which will redirects to the ``` Question ``` page. 

* In ```Question```, 15 questions will be shown. User have to answer the questions as well as user can submit the question at once. 

* Once user submits the question, it will redirect to the ```Result``` page and then all the results will be shown by marking the correct answer, wrong answer. 

* Here I have used redux-toolkit to manage the state globally and to avoid props drilling. 


## Installation

#### To Install Quiz app on your local machine, in your terminal write the below command. 

```bash
  git clone https://github.com/partha7978/quizApp.git

  cd quizApp
```

#### After installing on your local machine, you have to install all the packages that are used in this project.

```bash
  npm install
``` 

#### To run this project on your local machine

```bash
  npm start
```

## Tech Stack

* HTML
* CSS
* JavaScript
* React
* Material UI
* Quiz Api
* React Icons
* React Router
* Redux Toolkit
* Framer Motion


### Open Points

* On the question page, user should be able to see the status of the question [answered, unanswered, visited]. 
* Store data in local storage. Retrive the previous data in case user reloads. 


### Contributions are welcome. Please open an issue or a pull request on  [GitHub](https://github.com/partha7978/quizApp.git)

<br> 

## Copyright (c) 2022 <a href="https://parthadev.netlify.app/" target="_self">Partha Sarathi Muduli</a>