import { NextApiRequest, NextApiResponse } from "next";
import * as Question from "../../../models/Quiz";

export default async function handle(req:NextApiRequest, res:NextApiResponse){
    const {   
        category,
        type  ,          
        difficulty ,      
        question ,        
        correct_answer  , 
        incorrect_answer, authorId } = req.body;
    if (req.method=="POST"){
        try{
            res.json({
                data:{
                    result: await Question.createQuestion(req.body)
                }
            })

        }catch(err){
            res.json({error:err})
        }

    }else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route. ${res.json(404)}`
    );}
}