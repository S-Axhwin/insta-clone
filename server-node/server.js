const express = require('express');

const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/api' ,(req, res)=>{
    return res.json([
        {
          user: 'Yugha',
          id: 1,
          post: 'https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580',
          saved: false,
          liked: false,
        },
        {
          user: 'Ashwin',
          id: 2,
          post: 'https://images.unsplash.com/photo-1658242069270-61a1587cd6ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          saved: false,
          liked: false
        },
        {
          user: 'Aarif',
          id: 3,
          post: 'https://t4.ftcdn.net/jpg/02/55/54/13/360_F_255541389_7Vd0hVy25BEBA4uFL9WuLK6S5b7VM8ZK.jpg',
          saved: false,
          liked: false
        },
        {
          user: 'Monisha',
          id: 4,
          post: 'http://via.placeholder.com/640x360',
          saved: false,
          liked: false
        },
        {
          user: 'Monisha',
          id: 5,
          post: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
          saved: false,
          liked: false
        },
      ])
})

app.listen(5001, ()=>{console.log('listening')})