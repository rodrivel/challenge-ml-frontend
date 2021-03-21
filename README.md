# Challenge MercadoLibre - Frontend

React app that exposes that let you perform a search, view a list of results and access a product detail.


## Installation

There are two ways of running the application.
- conteinerized with docker.
- locally with nodejs.

The default port in both cases is 4000, so once the app is running you will be able to find it in your browser at [http://localhost:4000](localhost:4000).

### Docker

You'll need to have docker installed on your machine.
Then, in the root of the project, run the following commands.
```sh
sudo docker build -t meli-frontend .
sudo docker run -d -p 4000:4000 --name frontend-container meli-frontend
```

> Note: To stop and remove the container:
```sh
sudo docker rm -f frontend-container
```
### Locally

You'll need to have nodejs v12+ and npm v6.14+ installed on your machine.
Then, in the root of the project, run the following commands.
```sh
npm i
npm start
```

## How to run tests

Having set up the app locally, you are able to check and see a coverage report with the command. 
```sh
npm run test
```