const express = require('express');
const cors = require('cors');

const env = require('dotenv').config();
const app = express();
const port = process.env.PORT || 2999;
const TOKEN = process.env.CHANNEL_TOKEN || env.parsed.CHANNEL_TOKEN;

const {botHandler} = require('./controller/webhookHandler');

function startApp(){
	try{
		app.use(cors({
			origin:'*'
		}));
		
		app.get('/', (req, res) => {
		res.send('Hello World!');
		})
		app.post('/webhook',botHandler);

		app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
		})
	}
	catch(error){
		console.log(error);
	}
}

startApp();
