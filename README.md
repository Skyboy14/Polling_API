## polling API

## Description
"Real-time Polling API: Seamlessly integrate our API to create, manage, and analyze polls. Instantly gather valuable insights and engage audiences through interactive and dynamic polling experiences."

## TechStack
Node JS, Express, MongoDB


## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Required Routes
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/voteIncrement (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

## Folder Structure
```
Polling_API/
|── |configs/
│   ├── mongoose.js
|   
├── controllers/
│   ├── OptionsController.js
│   ├── QuestionsController.js
|   
├── models/
│   ├── options_models.js
│   ├── questions_models.js
|   
├── node_module/
|
├── routes/
│   |      ├── api/
|   |      |       | V1/
|   |      |       ├── index.js
|   |      |       ├── options.js
|   |      |       ├── questions.js
│   |      ├── index.js
│   ├── index.js
|   
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
├── README.md
