<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center"> 
<img width="800" alt="login" src="https://github.com/p-gatsby/DRJS/assets/106583795/3cb3b439-2fa9-48c0-9ddb-ed784601ebc5">
<img width="800" alt="patientEntry" src="https://github.com/p-gatsby/DRJS/assets/106583795/08772661-b2d4-49b0-acdd-7d3667045144">
</div>

This application, developed using React JS for the frontend, Django REST Framework for the backend, and hosted on AWS, is crafted to demonstrate a fully-functional e-commerce store built from scratch.
<!-- GETTING STARTED -->

## Getting Started

Welcome to DRJS! This guide provides detailed steps to set up the environment and install this project on your local computer.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- Python3

### Installation

Clone the repository > DRJS

  ```bash
  git clone https://github.com/p-gatsby/DRJS.git
  ```

Node.js packages installation ~ > DRJS > Client

- Install node dependencies
  ```sh
  npm install
  ```

Django server installation ~ > DRJS > Server

- Install virtual environment:

  ```sh
  python3 -m venv env
  ```

- Install server dependencies:

  ```sh
  pip install -r requirements.txt
  ```

### Server Environmental Variables

  ```
  SECRET_KEY = your-django-secret-key
  ```

### Running the app

- Run React.js App
  ```sh
  npm start
  ```
- Run Django Server
  ```sh
  source env/bin/activate
  ``` 
  
  ```sh
  python manage.py runserver
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
