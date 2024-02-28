
# Task project 

This project is a full-stack application featuring a React.js frontend and a Node.js backend. It's designed to showcase a simple yet effective setup for building and running a web application.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js > 17.X
- npm version > 8.x.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/prasanthmaran1/taskapp.git
   cd taskapp
   ```

2. **Install dependencies**

   - For the backend:

     ```bash
     cd server
     npm install
     ```

   - For the frontend:

     ```bash
     cd client
     npm install
     ```

### Running the Application

1. **Start the Backend Server**

   Navigate to the `server` directory and run:

   ```bash
   npm start
   ```

   The server will start on port 3000 by default. You can access the API at `http://localhost:3000`.

2. **Start the React Frontend**

   In a new terminal, navigate to the `client` directory and run:

   ```bash
   npm start
   ```

   This will start the React development server on port 9090. Your browser should automatically open to `http://localhost:9090`.

3. **Start the Application both front end backend**

   In a new terminal, navigate to the `taskapp` directory and run:

   ```bash
   npm start
   ```

   This will start the React development server on port 9090. You can access by `http://localhost:9090`.

    The server will start on port 3000 by default. You can access the API at `http://localhost:3000`.
   

## Building for Production

- To build the frontend for production, run:

  ```bash
  cd client
  npm run build
  ```

  This will compile the React app into static files in the `dist` folder.

- The backend does not typically need a build step for Node.js, but ensure any environment-specific configurations are set for production.


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/prasanthmaran1/taskapp/tags).

## Authors

- **Prasanth Maran** - *Initial work* - [PrasanthMaran1](https://github.com/prasanthmaran1)

See also the list of [contributors](https://github.com/prasanthmaran1/taskapp/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
