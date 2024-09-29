# IagoSilvaUiComponentsLibrary

## Introduction

👋 Hi, everyone! I'm currently studying how to create my own UI component library, and I developed this project as part of my learning journey. This library includes a collection of reusable UI components built with React and styled-components.

## Technologies Used

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-blue)
![Storybook](https://img.shields.io/badge/Storybook-8.3.4-blue)
![ESLint](https://img.shields.io/badge/ESLint-9.9.0-blue)

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.js.org/) (optional)

### Clone the Repository

```bash
git clone https://github.com/yourusername/iago-silva-ui-components-library.git
cd iago-silva-ui-components-library
```

### Install Dependencies
Using npm:

```bash
npm install
```

### Run the Development Server

To start the development server, run:

```bash
npm run dev
```

## Running Storybook

To run Storybook for viewing the components in isolation, use:

```bash
npm run storybook
```

## Usage

You can use the components in your project by importing them as follows:

```tsx
import Button from "iago-silva-ui-components-library/src/components/Button";

import Card from 'iago-silva-ui-components-library/src/components/Card';

// Example usage
<Button variant="primary">Click Me</Button>
<Card title="Card Title" content="This is a simple card component built with styled-components." />
```

## Components

The library currently includes the following components:

- Button: A customizable button component.
- Card: A simple card component that can display a title and content.
- Feel free to explore the components and contribute to the library!

## Using Storybook

Storybook is an open-source tool for developing UI components in isolation for React. It allows you to visualize different states of your components, test them, and create a living style guide for your application. With Storybook, you can easily showcase your components, document their usage, and build complex UIs faster and more efficiently.

- **Documentation**: [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

## Why Use pnpm?

`pnpm` is a fast, disk space-efficient package manager. It allows you to install dependencies more efficiently by using symlinks to share packages across different projects. This results in faster installations and reduced disk space usage compared to other package managers like npm or yarn. By using `pnpm`, you can streamline your development workflow, improve performance, and keep your project dependencies organized.

- **Documentation**: [pnpm Documentation](https://pnpm.js.org/)

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.
