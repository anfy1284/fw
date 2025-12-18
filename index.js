
const { start } = require('my-old-space');
const path = require('path');
const config = require('./server.config.json');

// Запускаем фреймворк, обязательно передавая rootPath и config
start({
	rootPath: __dirname,
	config
});
