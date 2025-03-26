# Real Estate Backend

This project is the backend for the Real Estate application.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (or your preferred database)

## Getting Started

1. **Clone the repository**:
  ```bash
  git clone https://github.com/mbortg995/realstate_be.git
  cd realstate_be
  ```

2. **Install dependencies**:
  ```bash
  npm install
  ```
  Or if you use Yarn:
  ```bash
  yarn install
  ```

3. **Set up environment variables**:
  Create a `.env` file in the root directory and configure the following variables:
  ```
  DATABASE_URL=your_database_url
  PORT=your_preferred_port
  ```

4. **Run database migrations**:
  ```bash
  npm run migrate
  ```
  Or with Yarn:
  ```bash
  yarn migrate
  ```

5. **Start the development server**:
  ```bash
  npm run dev
  ```
  Or with Yarn:
  ```bash
  yarn dev
  ```

6. **Access the API**:
  The backend should now be running at `http://localhost:<PORT>`.

## Scripts

- `npm run dev` - Start the development server.
- `npm run migrate` - Run database migrations.
- `npm run build` - Build the project for production.
- `npm start` - Start the production server.

## License

This project is licensed under the [MIT License](LICENSE).