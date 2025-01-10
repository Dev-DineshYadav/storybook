# YouVet Assignment - Storybook

This project contains a collection of reusable React components built with Storybook for the application.

## Table of Contents
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [File Usage](#file-usage)
4. [Running the Project](#running-the-project)
5. [Building for Production](#building-for-production)

## Installation

To install the dependencies for the Storybook project, run the following command:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Dev-DineshYadav/storybook.git
    cd storybook
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

## Project Structure

The folder structure for the Storybook project is as follows:

```plaintext
storybook/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── stories/
│   ├── Button.stories.ts
│   ├── Card.stories.ts
│   └── Modal.stories.ts
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── ...
├── package.json
└── README.md
```

- `components/`: Contains all the reusable React components.
- `stories/`: Contains the stories for each component.
- `.storybook/`: Configuration files for Storybook.
- `package.json`: Lists the project dependencies and scripts.
- `README.md`: This file.


## File Usage

### Components

1. `Button.tsx`: A customizable button component with various props for type, size, loading state, etc.
2. `Card.tsx`: A card component that can display an image, title, description, and an optional button.
3. `Modal.tsx`: A modal component for displaying content in an overlay.


### Stories

1. `Button.stories.ts`: Contains various stories showcasing different button states and configurations.
2. `Card.stories.ts`: Demonstrates different card layouts with and without images.
3. `Modal.stories.ts`: Shows different modal configurations, including responsive behavior.


## Running the Project

To start the Storybook development server, run the following command:

```shellscript
npm run storybook
```

This will launch Storybook in your default browser, where you can interact with and test the components.

## Building for Production

To build the Storybook for production, use the following command:

```shellscript
npm run build-storybook
```

This will create a static version of your Storybook in the `storybook-static` directory, which you can then deploy to a web server.

```plaintext

This README.md file provides a comprehensive overview of the Storybook project, including installation instructions, project structure, file usage, and commands for running and building the project.
```