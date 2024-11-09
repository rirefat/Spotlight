# SpotLight
Spotlight is a Next.js-based platform designed to help users find local events. The platform provides a clean, user-friendly interface with location-based features and curated event listings to enhance engagement and foster community connections. Spotlight aims to create a seamless and engaging experience for discovering events locally, connecting users to their communities through technology.

## Project Overview
- Build the UI structure from the template.
- Set up MongoDB with events data, user data and references.
- Integrate Mongo with Next.js using Mongoose(Connect, Model, Schema, Queries).
- Fetch event details from the database.
- Implement the register UI and register a user in DB.
    - Use case: Server component to server action.
- Implement the login(basic auth using email & password).
    - Use case: Client component to server action.
- Auth details in context
    - Use case: How to use Context API with Next.js App Router.
- Mark an event as interested
    - Use case: Revalidate path after DB update.
    - Use case: Server action invoked on Button click(Performance optimization with the useTransition Hook).
- RSVP to an event and buy a ticket.
    - Use case: Send an email on a successful payment.
- Integrate structured event schema from Google Schema
    - Use case: SEO 
- Meta optimization and dynamic meta data.
- Implementing server side search with searchTerm and debouncing.
- Image optimization and handle blur placeholder.
- Handling loading and errors.


## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js** (version 14.x or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rirefat/Spotlight
   cd devscripts   
2. **Install the dependencies:**
    ```bash
    npm install
    # or
    yarn install
3. ***Run the development server:***
    ```bash
    npm run dev
    # or
    yarn dev
The application will be available at http://localhost:3000.

### Building for Production
To build the project for production, use the following command:
```bash
npm run build
# or
yarn build
```

This will create an optimized build in the .next folder, ready for deployment.

## Contribution Guidelines
We welcome contributions to enhance the functionality and documentation of DevScripts. Please follow these steps to contribute:
1. **Fork the repository on GitHub**

2. **Clone your forked repository:**
    ```bash
    git clone https://github.com/your-username/Spotlight.git

3. **Create a new branch for your feature or bugfix:**
    ```bash
    git checkout -b feature-or-bugfix-name
4. **Make your changes and commit** them with clear and descriptive messages.
5. **Push your changes to your forked repository:**
    ```bash
    git push origin feature-or-bugfix-name
6. **Submit a Pull Request** to the main branch of the original repository.
7. **Review process:** Your pull request will be reviewed, and once approved, it will be merged into the main branch.


## Contact
For any inquiries or suggestions, feel free to contact me via GitHub.