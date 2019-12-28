module.exports = {
    // MongoDB
    mongodbURI: 'mongodb://localhost:27017',
    mongodbName: 'safetygram',
    // Microservice specific Configurations
    frontendApi: {
        // dont change if you dont know, what youre doing
        port: 40490,
        host: '127.0.0.1',
    },
    telegramInput: {
        apiId: 925988,
        apiHash: '8e6cde8b8bb82334fd4cdbbebc376128',
        // dont change if you dont know, what youre doing
        port: 40491,
        host: '127.0.0.1',
    },
}