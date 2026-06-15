# Game Hub - Video Game Discovery App

A video game discovery web application built with React, TypeScript, and Chakra UI. This project allows users to browse, search, and filter video games using the RAWG Video Games Database API.

## 📚 Course Information

This project is based on **Mosh Hamedani's React Course** from [CodeWithMosh](https://codewithmosh.com)

**Course**: Building a Video Game Discovery App (3 hours)

**Official GitHub Repository**: [mosh-hamedani/game-hub](https://github.com/mosh-hamedani/game-hub)

**Live Demo**: [game-hub-phi.vercel.app](https://game-hub-phi.vercel.app/)

### Course Curriculum

1. **Getting Started**
   - What We'll Build (1m 23s)
   - Source Code
   - Up for a Challenge?
   - Setting Up the Project (1m 31s)

2. **UI Foundation**
   - Installing Chakra UI (5m 00s)
   - Creating a Responsive Layout (4m 53s)
   - Building the Navigation Bar (3m 58s)
   - Implementing the Dark Mode (2m 44s)
   - Building the Color Mode Switch (3m 36s)

3. **Data Fetching & Display**
   - Fetching the Games (8m 19s)
   - Creating a Custom Hook for Fetching Games (4m 59s)
   - Building Game Cards (6m 08s)
   - Displaying Platform Icons (13m 42s)
   - Displaying Critic Score (4m 20s)
   - Getting Optimized Images (3m 56s)

4. **User Experience**
   - Improving User Experience with Loading Skeletons (5m 37s)
   - Refactor - Removing Duplicated Styles (2m 34s)
   - Handling Games without an Image (1m 07s)
   - Adding Emojis (5m 35s)

5. **Filtering & Sorting**
   - Fetching the Genres (4m 31s)
   - Creating a Generic Data Fetching Hook (6m 42s)
   - Displaying the Genres (8m 52s)
   - Showing a Spinner (1m 27s)
   - Filtering Games by Genre (12m 33s)
   - Highlighting the Selected Genre (1m 43s)
   - Building Platform Selector (4m 30s)
   - Filtering Games by Platform (6m 15s)
   - Refactoring - Extracting a Query Object (5m 11s)
   - Building Sort Selector (2m 59s)
   - Sorting Games (8m 10s)
   - Fixing the Issue with Chakra Menus (1m 28s)

6. **Search & Polish**
   - Building Search Input (2m 38s)
   - Searching Games (6m 05s)
   - Adding a Dynamic Heading (4m 38s)
   - Cleaning Up the Genres (2m 20s)
   - Cleaning Up the Game Cards (1m 23s)
   - Shipping Static Data (3m 16s)
   - Customizing the Chakra Theme (2m 57s)
   - Refactoring Game Grid (0m 56s)

7. **Deployment**
   - Building for Production (2m 49s)
   - Deploying to Vercel (4m 42s)
   - Course Wrap Up (0m 25s)

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Chakra UI** - Component library and styling
- **React Router** - Client-side routing and navigation
- **React Query (TanStack Query)** - Data fetching and caching
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Framer Motion** - Animations
- **RAWG API** - Video game database API

## ✨ Features

### Core Features (From Course)
- 🎮 Browse thousands of video games
- 🔍 Search games by name
- 🎯 Filter by genre
- 🎮 Filter by platform (PC, PlayStation, Xbox, Nintendo, etc.)
- 📊 Sort by relevance, date added, name, release date, popularity, and rating
- ⭐ View critic scores and ratings
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Optimized image loading
- 💀 Loading skeletons for better UX
- 😊 Emoji reactions based on game ratings

### Enhanced Features (Extended Implementation)
- 🎬 **Game Detail Pages** - Click on any game to view detailed information
- 📖 **Full Game Descriptions** - Read full game descriptions with expandable text
- 🎥 **Game Trailers** - Watch game trailers directly on detail pages
- 📸 **Screenshots Gallery** - View game screenshots in a responsive grid
- ℹ️ **Game Attributes** - See platforms, genres, publishers, and more
- 🔗 **Client-side Routing** - Fast navigation using React Router
- 🔙 **Logo Navigation** - Click the logo to return to home page

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd game-hub-development
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

│   ├── GameCard.tsx           # Game card with clickable link
│   ├── ExpandableText.tsx     # Expandable description text
│   ├── GameAttributes.tsx     # Game metadata display
│   ├── GameTrailer.tsx        # Video trailer player
│   ├── GameScreenshots.tsx    # Screenshots gallery
│   └── ...                    # Other components
├── data/           # Static data (genres, platforms)
├── entities/       # TypeScript interfaces/types
│   ├── Game.ts                # Extended game entity
│   ├── GameQuery.ts           # Search/filter query type
│   └── ...                    # Other entities
├── hooks/          # Custom React hooks
│   ├── useGame.ts             # Fetch individual game details
│   ├── useTrailers.ts         # Fetch game trailers
│   ├── useScreenshots.ts      # Fetch game screenshots
│   └── ...                    # Other hooks
├── pages/          # Page components for routing
│   ├── Layout.tsx             # Main layout wrapper
│   ├── HomePage.tsx           # Game browsing/discovery page
│   ├── GameDetailPage.tsx     # Individual game detail page
│   └── ErrorPage.tsx          # Error boundary page
├── services/       # API services
├── routes.tsx      # React Router configuration
## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components
├── data/           # Static data (genres, platforms)
├── entities/       # TypeScript interfaces/types
├── hooks/          # Custom React hooks
├── services/       # API services
└── theme.ts        # Chakra UI theme customization
```

## 🔑 API

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs). The API key is included in the source code for educational purposes.

## 📝 License

This project is for educational purposes based on CodeWithMosh's React course.

## 👨‍💻 Author

Built while following Mosh Hamedani's React course at [CodeWithMosh](https://codewithmosh.com)

https://github.com/mosh-hamedani/game-hub/tree/main