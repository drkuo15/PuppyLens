# PuppyLens 🐶

![PuppyLens Preview](/public/images/PuppyLens.png)

A modern web application for browsing and exploring dog breeds using the Dog CEO API. Built with Next.js 15 and React 19. [Visit PuppyLens >>](https://puppy-lens.vercel.app/)

## Features

- Browse a comprehensive list of dog breeds
- Search for specific breeds
- View image galleries for each breed
- Responsive design for all devices
- Fast loading with optimized images

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PuppyLens.git
   cd PuppyLens
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

Run the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Starting the Production Server

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Architecture

- **Next.js 15**: Leveraging the App Router for server components and improved performance
- **React 19**: Using the latest React features for optimal rendering
- **Server Components**: Utilizing React Server Components for improved initial load performance and SEO
- **Suspense**: Implementing React Suspense for better loading states and user experience

### Performance Optimizations

- **Turbopack**: Using Turbopack for faster development builds
- **Lazy Loading**: Images are loaded only when needed
- **Server-side Rendering**: Critical data is fetched on the server for faster initial page loads
- **Client-side Caching**: Implementing efficient caching strategies for API responses

### UI/UX

- **Tailwind CSS**: For responsive and utility-first styling
- **Mobile-first Design**: Ensuring a great experience on all device sizes
- **Skeleton Loading States**: Providing visual feedback during data loading

### Development Workflow

- **TypeScript**: For type safety and better developer experience
- **ESLint**: For code quality and consistency
- **Commitizen**: For standardized commit messages

## Roadmap

- Implement infinite scrolling for breed images
- Add favorites functionality to save preferred breeds




