const express = require('express')
const fs = require('fs');
const data = fs.readFileSync('verbs.json')
const verbs = JSON.parse(data)
const dataNouns = fs.readFileSync('nouns.json')
const nouns = JSON.parse(dataNouns)
const dataCities = fs.readFileSync('cities.json')
const cities = JSON.parse(dataCities)
const app = express()


app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/words/:word', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  let verb = verbs.filter(x => x.Infinitive === req.params.word.toLowerCase())[0]
  let noun = nouns[req.params.word[0].toUpperCase()+req.params.word.slice(1).toLowerCase()]

  let data ={
    verb: verb? verb: false,
    noun: noun? noun: false
  } 
  if (noun == undefined && verb == undefined){
    res.sendStatus(404)
  }else{
    res.end(JSON.stringify(data))
  }
})


app.get('/cities/:city', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  // console.log(req.params.city[0].toUpperCase()+req.params.city.slice(1).toLowerCase())
  // console.log(req.params.city.split('-')[0][0].toUpperCase()+req.params.city.split('-')[0].slice(1).toLowerCase()+'-'+req.params.city.split('-')[1][0].toUpperCase()+req.params.city.split('-')[1].slice(1).toLowerCase())
  let city = cities.filter(x => x.city === req.params.city[0].toUpperCase()+req.params.city.slice(1))[0]
  if (city === undefined){
    res.sendStatus(404)
  }else res.end(JSON.stringify(city))

})



  app.listen(process.env.PORT ||3001)