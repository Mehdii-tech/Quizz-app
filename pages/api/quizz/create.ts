import { NextApiRequest, NextApiResponse } from "next";
import * as Quiz from "../../../models/Quiz";

export default async function handle(req:NextApiRequest, res:NextApiResponse){
    const {   
        title,
        subject,          
        authorId, published, question } = req.body;
        console.log(req.body,'eeeee')
    if (req.method=="POST"){
        try{
            res.json({
                data:{
                    create: await Quiz.createQuizz(req.body)
                }
            })

        }catch(err){
            console.log(err)
            res.json({error:err})
        }

    }else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route. ${res.json(404)}`
    );}
}