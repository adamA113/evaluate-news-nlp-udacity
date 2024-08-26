## evaluate-news-nlp Project

## Overview
This project MeaningCloud's Sentiment Analysis API to perform a detailed multilingual sentiment analysis of texts from different sources by using advanced natural language processing techniques. 

It provides a response containing a positive/negative/neutral sentiment, polarity, subjectivity besides other parameters.

## Run the project
To run this project on your local machine:
* Make a forked repo.

* Clone it on your local machine using the following command:
```
git clone <the url of your forked repo>
```
* cd into the cloned files.

* Then type to install all the required dependencies:
```
$ npm install
```
* create .env file in the root directory either manualy, or type the following command in the terminal:
```
touch .env
```
* add your MeaningCloud API Key inside .env file that you have created like this:
```
API_KEY = your own key
```
* Then type the following to create a build of the files:
```
$ npm run build
```
* open a new window in your browser and type:

```
http://localhost:3000/
```

License
---

MIT