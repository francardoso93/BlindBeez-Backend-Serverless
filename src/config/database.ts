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
            // options = {
            //     type: 'postgres',
            //     host: "blind.ctoukcg6wilz.us-east-1.rds.amazonaws.com",
            //     username: "postgres",
            //     password: "adminadmin",
            //     database: "blindbeez",
            //     port: 5432,
            //     entities: [__dirname + '/../**/**.entity{.ts,.js}'],
            //     synchronize: true,
            // } as TypeOrmModuleOptions;
            options = {
                type: 'postgres',
                host: process.env.BLIND_PG_HOST,
                username: process.env.BLIND_PG_USERNAME,
                password: process.env.BLIND_PG_PASSWORD,
                database: process.env.BLIND_PG_DATABASE,
                port: parseInt(process.env.BLIND_PG_PORT, 10),
                entities: [__dirname + '/../**/**.entity{.ts,.js}'],
                synchronize: true,
            } as TypeOrmModuleOptions;
        }
        return options;
    }
}
