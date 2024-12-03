# NYT Challenge

It is a simple app that allows you to search for books from the [New York Times Books API](https://developer.nytimes.com/docs/books-product/1/overview).

The user accesses the app through a welcome page, where they can select a category to view the bestsellers for that category. Then they look at the list of books with details and can go to the Amazon product page for each book.

## Tech Stack

- React
- TypeScript
- Vite (build tool)
- React Router
- styled-components
- Tanstack React Query for caching

## Requirements

- Node.js 20.x
- Yarn 1.x

> If you don't have yarn installed, you can install it with `npm install -g yarn`.

## Setup

1. Install dependencies:

```bash
yarn install
```

2. Create environment variables:
   - Create a new file called `.env` in the root directory
   - Get your API key from [NYT Developer Portal](https://developer.nytimes.com/get-started)
   - Add your API key to the `.env` file (you can use the key below if you don't want to create your own):

```bash
VITE_NYT_API_KEY=AXZGAH6zEia92Zq0NYyDGj8MZSrAnu3Q
```

## Run

```bash
yarn dev
```

By default, the app will run on http://localhost:5173
