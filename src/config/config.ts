import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  port: number | string
  passwordSalt: string
  tokenSecret: string
  refreshTokenSecret: string
}

const config: IConfig = {
  port: process.env.PORT || 3333,
  passwordSalt: process.env.PASSWORD_SALT || 'default,salt',
  tokenSecret: process.env.TOKEN_SECRET || 'default_secret',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'default_refresh_secret',
}

export default config

