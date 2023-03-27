const redis = require('redis');
const publisher = redis.createClient({
    host: '127.0.0.1',
    port: '6379'
});

const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
};

const redisPublish = async () => {
    try {
        await publisher.connect();

        for (var i = 1000000 - 1; i >= 0; i--) {
            await publisher.publish('article', JSON.stringify(i));
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    redisPublish,
};

redisPublish();