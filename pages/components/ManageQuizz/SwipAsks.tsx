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
    const [questions, setQuestions] = useState<any[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
       "http://localhost:3000/api/ask/all");
        const questions = await res.json();
        console.log(questions, 'pppp')
        setQuestions(questions);
      };
      fetchData();
    }, []);
    console.log(questions,'ozozozooz')
    return(
        <Swiper direction={'vertical'} pagination={{
            "clickable": true
            }} className="mySwiper">
            
              {questions[0].data.questions.map(
                (ask:any, i:number)=>
                <p>{ask}</p>
                // <>
                // <SwiperSlide key={i}>
                // <p className="top-0 left-0">{ask}, {ask.type}, {ask.difficulty}</p>
                // <h1>{ask.question}</h1>
                // <p className="bottom-0 right-0">{ask.correct_answer}, {ask.incorrect_answer} </p>
                // </ SwiperSlide>
                // </>
              )}

            
            </Swiper>

    )
}
