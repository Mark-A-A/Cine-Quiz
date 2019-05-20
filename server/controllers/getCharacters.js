const  { characters }= require('../config/seeds')

const TAG = "Controllers - getCharacters"

export async function getCharacters(req,res, next){
  res.json(characters)
}