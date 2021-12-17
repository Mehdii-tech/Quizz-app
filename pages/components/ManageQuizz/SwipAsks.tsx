import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import * as Questions from '../../../models/Question'
import { useEffect, useState } from "react";

import SwiperCore, {
    Pagination
  } from 'swiper';
import { data } from "autoprefixer";

  SwiperCore.use([Pagination]);

export default function SwipeAsks(){
    const [questions, setQuestions] = useState<[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
       "http://localhost:3000/api/ask/all");
        const questions = await res.json();
        console.log(questions.data.questions, 'pppp')
        setQuestions(questions.data.questions);
      };
      fetchData();
    }, []);
    console.log(questions,'ozozozooz')
    return(
        <Swiper direction={'horizontal'} pagination={{
            "clickable": true
            }} className="mySwiper">
            
              {questions.map(
                (ask:any, i:number)=>
                <>
                <SwiperSlide key={i}>
                <div className="p-3 bg-blue-200">
  <div className="bg-white p-10 rounded-2xl shadow-lg w-full  mx-auto">
      <h2 className="font-bold mb-2 text-xl text-gray-800">{ask.category}, {ask.type}</h2>
      <p className="text-gray-700">{ask.question}</p>
      <p className="text-gray-700">correct answer {ask.correct_answer}, incorrect answer {ask.incorrect_answer}</p>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">{ask.difficulty}</span>
  </div>
  
</div>
                {/* <p className="top-0 left-0">{ask.category}, {ask.type}, {ask.difficulty}</p>
                <h1>{ask.question}</h1>
                <p className="bottom-0 right-0">{ask.correct_answer}, {ask.incorrect_answer} </p> */}
                </ SwiperSlide>
                </>
              )}

            
            </Swiper>

    )
}
