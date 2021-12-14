import { NextApiRequest, NextApiResponse } from "next";
import * as Question from "../../../models/Question";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method == 'GET') {
  try{
  res.json({
    data: {
      questions: await Question.find(),
    },
  });}catch(err){
    res.json({error:err})
  }} else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route. ${res.json(404)}`
    );
  }
}