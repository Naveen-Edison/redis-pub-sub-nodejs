const redis = require('redis');
const subscriber = redis.createClient({
    host: '127.0.0.1',
    port: '6379'
});

const redisSubscirbe = async () => {
    try {
        await subscriber.connect();

        await subscriber.subscribe('article', (message) => {
            console.log(message);
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    redisSubscirbe,
};

redisSubscirbe();