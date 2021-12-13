import Image from 'next/image'
import * as Questions from '../../../models/Question'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
  } from 'swiper';
  SwiperCore.use([Pagination]);


export default function CreatePopup({ asks }:any){
  console.log(asks,"666666666")

    return(
        <>
        <div className="container mx-auto px-4 h-full" >
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 sm:w-7/12 px-4  ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <Image
                      alt="..."
                      className="flex flex-col mb-6  shadow-l rounded-t-lg bg-gray-300 border-0"
                      src={require("../../assets/img/modal.gif")}
                      height={450}
                    />
              <div className="rounded-t mb-0 px-6 py-2">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Create your beautiful Quizzz 
                  </h6>
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
        {/* <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or  with credentials</small>
        </div> */}

                    <form >
                    <div className="relative w-full mb-3">
              <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                  Title
              </label>
              <input                           type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Title"
                          style={{ transition: "all .15s ease" }} required   />
          </div>
          <div className="relative w-full mb-3">
              <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                  Subject
              </label>
              <input                           type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Subject"
                          style={{ transition: "all .15s ease" }} required   />
          </div>
          <div className="relative w-full mb-3">
              <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                  Choose your questions for your quizz
              </label>
              <Swiper direction={'vertical'} pagination={{
            "clickable": true
            }} className="mySwiper">
            <SwiperSlide>
              {asks.map(
                (ask:any)=>
                <>
                <p className="top-0 left-0">{ask.category}, {ask.type}, {ask.difficulty}</p>
                <h1>{ask.question}</h1>
                <p className="bottom-0 right-0">{ask.correct_answer}, {ask.incorrect_answer} </p>
                </>
              )}

            </SwiperSlide>
            </Swiper>
          </div>




                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

// export async function getStaticPaths() {
//   const question = await Questions.find()
//   const asks = JSON.parse(JSON.stringify(question));
// console.log(asks ,'444')
// return {
//   paths: asks.map(
//     (quiz:any) => ({ params: { id: String(quiz.id) } })
//   ),
//   fallback: false,
// };
// }

export async function getStaticProps() {
  const question = await Questions.find()
  const asks = JSON.parse(JSON.stringify(question));

return {
  props: {
    asks,
  },
}
}