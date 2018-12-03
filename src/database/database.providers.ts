import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'pellefant.db.elephantsql.com',
      port: 5432,
      username: 'mwmzzykx',
      password: 'l1viKBcVOdMmb3tI9i3vNkkNcaGGC6T3',
      database: 'mwmzzykx',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      dropSchema: false,
      synchronize: false,
    }),
  },
];