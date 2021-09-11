const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

//Conncetion a mongodb
mongoose.connect('mongodb+srv://Cartoine:iSRNlS61BgLq4w7H@cluster0.nl2qa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Erreurs de CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())

//route post
app.post('/api/sauces', (req, res, next) => {
    console.log(req.body)
    res.status(201).json({ message :'sauce crée'})
})

//route get
app.use('/api/sauces', (req, res, next) => {
    const sauces = [
        {
            userId: 'bob',
            name: 'pike',
            manufacturer: 'pk',
            description: 'lorem',
            mainPepper: 'acad',
            imageUrl: 'zadca',
            heat: 19,
            likes: 12,
            dislikes: 12,
            usersLiked: 12,
            usersDisliked: 12
        }
    ]
    res.status(200).json(sauces)
})

module.exports = app