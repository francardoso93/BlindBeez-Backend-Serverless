import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConnectionManager, getConnectionManager } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        const connectionManager: ConnectionManager = getConnectionManager();
        let options: any;

        if (connectionManager.has('default')) {
            options = connectionManager.get('default').options;
            await connectionManager.get('default').close();
        } else {
            //CLOUD
            options = {
                type: 'postgres',
                host: "blind.ctoukcg6wilz.us-east-1.rds.amazonaws.com",
                username: "postgres",
                password: "adminadmin",
                database: "blindbeez",
                port: 5432,
                entities: [__dirname + '/../**/**.entity{.ts,.js}'],
                synchronize: true,
            } as TypeOrmModuleOptions;
            //LOCAL
            // options = {
            //     type: 'postgres',
            //     host: "localhost",
            //     username: "postgres",
            //     password: "admin",
            //     database: "blindbeez",
            //     port: 5432,
            //     entities: [__dirname + '/../**/**.entity{.ts,.js}'],
            //     synchronize: true,
            // } as TypeOrmModuleOptions;
            // TODO: Variaveis de ambiente resolvem a questão do DEV VS. PROD!!
            // options = {
            //     type: 'postgres',
            //     host: process.env.MYSQL_HOST,
            //     username: process.env.MYSQL_USER,
            //     password: process.env.MYSQL_PASSWORD,
            //     database: process.env.MYSQL_DATABASE,
            //     port: parseInt(process.env.MYSQL_PORT, 10),
            //     entities: [__dirname + '/../entity/**.entity{.ts,.js}'],
            //     synchronize: true,
            // } as TypeOrmModuleOptions;
        }
        return options;
    }
}
