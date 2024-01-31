const express = require('express');

const app = express();

app.get((req, res)=>{
    return req.json({user: ['mem1','mem2','mem3', ]})
})
