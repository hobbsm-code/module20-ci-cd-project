# Module 20 Challenge

## Project Overview

This project is a MERN stack application that allows users to take a quiz on various tech topics. The application will display a question and multiple choice answers. The user will select an answer and submit it. The application will then display the correct answer and the user's score. The user can then move on to the next question. The application will keep track of the user's score and display it at the end of the quiz.

This application was created by the edX team as part of the edX Full Stack Developer Bootcamp. The YAML develop and deploy files were created by the student to practice automated ci/cd pipelines using GitHub Actions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Additional Notes](#additional-notes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

To build the project, run the following command:

```bash
npm run build
```

To start the project, run the following command:

```bash
npm run start
```

## Additional Notes

The develop and main branches are protected. To merge code into the main branch, you must create a pull request and have it reviewed by a team member. The code must pass all tests and the build must be successful before it can be merged.

Upon creating a pull request to the develop branch, the GitHub Actions CI/CD pipeline will run. The pipeline will run the tests and build the project. If the tests pass and the build is successful, the code is elligible be merged into the develop branch.

Upon merging a pull request to the main branch, the GitHub Actions CI/CD pipeline will run. The pipeline will run the Deploy stage and deploy the application to Render.

The application is deployed to the following URL: 
[https://module20-ci-cd-project.onrender.com/](https://module20-ci-cd-project.onrender.com/)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [Your Name] at [your.email@example.com].