const express = require('express');
const chalk = require('chalk');
const app = express();

app.listen(3000, (error) => {
    if (error){
        console.log(chalk.red.inverse('error executing app.listen'))
    } else {
        console.log ('connected at port 3000')
    }
})

app.get('/', (request, response) =>{
    response.send('connected');
})