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
    const [checked, setChecked]=useState([{Number}])
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
    console.log(checked,'list of questions')
    return(
        <Swiper direction={'horizontal'} pagination={{
            "clickable": true
            }} className="mySwiper">
            
              {questions.map(
                (ask:any, i:number)=>
                <>
                <SwiperSlide key={i}>
                  <div className="p-3 bg-blue-200 rounded-lg">
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full  mx-auto">
                      <div className="inline-flex">
                      <h2 className="font-bold mb-2 text-xl text-gray-800">{ask.type}</h2>
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 justify-content-end" value={ask.id} onClick={()=>setChecked(ask.id)}/>
                      </div> 
                        <p className="text-gray-700">{ask.question}</p>
                        <span className="text-gray-700">correct answer <p className="italic font-bold">{ask.correct_answer}</p> incorrect answer <p className="italic font-bold">{ask.incorrect_answer.join(', ')}</p></span>
                        <div className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">{ask.difficulty}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">{ask.category}</span>
                        </div>
                    </div>
                  </div>
                </ SwiperSlide>
                </>
              )}

            
        </Swiper>

    )
}


