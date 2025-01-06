# Telegram Bot Boilerplate with TypeScript

A simple and clean boilerplate for creating Telegram bots using TypeScript and Grammy framework.

## Features

- 🚀 TypeScript setup configured
- ⚡ Grammy as the bot framework
- 🔄 Hot reload for development
- 📁 Clean project structure

## Prerequisites

- Node.js (v16 or higher)
- A Telegram Bot Token ([Get it from @BotFather](https://t.me/botfather))

## Quick Start

1. Clone this repository
2. Navigate to bot directory:
   ```bash
   cd bot
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your environment:
   - Create `.env` file in the bot directory
   - Add your bot token:
     ```
     BOT_TOKEN=your_bot_token_here
     ```
5. Start development:
   ```bash
   npm run dev
   ```

## Available Scripts

All these commands should be run from the `/bot` directory:

- `npm run dev` - Start bot with hot reload
- `npm run tsc` - Run TypeScript compiler in watch mode
- `npm run build` - Build for production
- `npm run start` - Run production build

## Built With

- [Grammy](https://grammy.dev/) - Modern Telegram Bot Framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [nodemon](https://nodemon.io/) - For development

## License

ISC