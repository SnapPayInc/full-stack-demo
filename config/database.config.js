import * as dotenv from "dotenv";
dotenv.config();

const databaseConfig = {
    database: process.env.DATABASE || 'fullstack_test',
    username: process.env.DB_USERNAME || 'snaplii_dev',
    password: process.env.DB_PASSWORD || 'n0pa55w0rd',
    host: process.env.DB_HOST || 'db-mysql-writer.nonprod.snaplii.com',
    port: process.env.DB_PORT || 3306
}

export default databaseConfig