import { NextApiRequest, NextApiResponse } from "next";
import * as Quiz from "../../../models/Quiz";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method == 'GET') {
  try{
  res.json({
    data: {
      quiz: await Quiz.findOne(Number(req.query.id)),
    },
  });}catch(err){
    res.json({error:err})
  }} else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route. ${res.json(404)}`
    );
  }
}