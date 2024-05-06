import dotenv from 'dotenv';

dotenv.config();

console.log('port =>', process.env.REDIS_HOST);
export default  {
    PORT:process.env.PORT,
    REDIS_PORT:parseInt(process.env.REDIS_PORT || "6379"),
    REDIS_HOST:process.env.REDIS_HOST || '127.0.0.1'
}