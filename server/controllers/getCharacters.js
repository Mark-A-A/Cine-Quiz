const  { characters }= require('../config/seeds')

const TAG = "Controllers - getCharacters"

export async function getCharacters(req,res, next){
  console.log("request for characters received => sending")
  res.json(characters)
}