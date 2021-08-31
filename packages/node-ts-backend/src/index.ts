import dotenv from 'dotenv';

// load the environment variables from the .env file
dotenv.config({
  path: '.env',
});

console.log(process.env.APP_PORT);
