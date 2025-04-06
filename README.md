# Rick and Morty - Rick and Morty Character Explorer

A Next.js application that allows users to explore Rick and Morty characters with a personalized experience.

## Features

- **User Preferences**: Customise your experience with user preferences
- **Character Exploration**: Browse through Rick and Morty characters
- **Character Details**: View detailed information about each character
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Built with Chakra UI for a dark mode experience

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Chakra UI
- **State Management**: React Hooks
- **Data Fetching**: Apollo Client, GraphQL
- **Testing**: Jest, React Testing Library
- **Documentation**: Storybook

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/szaranger/rick-and-morty.git
   cd rick-and-morty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

5. You can also view the app on [Vercel]() 

## Project Structure

```
rick-and-morty/
├── app/                  # Next.js app directory
│   ├── info/             # Info page with character list
│   ├── __tests__/        # Tests for app components
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── home/             # Components for home page
│   └── info/             # Components for info page
├── lib/                  # Utility libraries
│   ├── graphql/          # GraphQL client and queries
│   └── theme.ts          # Chakra UI theme configuration
├── services/             # Service layer
│   └── user-preferences.ts # User preferences service
├── stories/              # Storybook stories
│   ├── components/       # Component stories
│   └── pages/            # Page stories
└── public/               # Static assets (just one image)
```

## Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## Storybook

View the component library:

```bash
npm run storybook
```

## Deployment

The application can be deployed to to Vercel.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the character data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Chakra UI](https://chakra-ui.com/) for the component library
