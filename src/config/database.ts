import { join } from 'path';

export default {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'paradise',
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
};
