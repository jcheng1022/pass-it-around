const express = require('express');
const app = express();



app.get('/', (req,res) => {
    res.send(`99 Bottles of beer on the wall. <a href=${'/98'}> take one down pass it around </a>`);
})

app.get('/:number_of_bottles' , (req,res) => {
    if(req.params.number_of_bottles > 0) {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href=${req.params.number_of_bottles - 1}> take one down pass it around </a>`)
    }else {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <a href=${'/'}> Start Over </a>`)
    }
})
//listen below

app.listen(3000 , () => {
    console.log('I am listening');
})

