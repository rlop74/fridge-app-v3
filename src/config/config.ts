import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  port: number | string
}

const config: IConfig = {
  port: process.env.PORT || 3333,
}

export default config

