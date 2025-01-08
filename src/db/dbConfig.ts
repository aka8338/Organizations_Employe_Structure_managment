import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'akebeya8338',
  database: 'org_structure',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
