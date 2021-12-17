import Image from 'next/image'
import  SwipeAsks  from './SwipAsks'
import * as Questions from '../../../models/Question'
import router from 'next/router'
import { useState } from 'react'

async function create(title:string, subject:string, question:Number[]) {
  const response = await fetch('/api/quizz/create', {
    method: 'POST',
    body: JSON.stringify({ title, subject, question}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export default function CreatePopup(){
  const [title, setTitle]=useState('')
  const [subject, setSubject]=useState('')
  const [question, setQuestion]=useState([])
  async function submitHandler(){
      if (title && subject && question){
        try {
          console.log(title, subject, question)
          const response = await create(title, subject, question);
          console.log(response)
          router.replace('/')
        } catch (error) {
          console.log(error);
        }
      }
  }

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

                    <form onSubmit={submitHandler}>
                    <div className="relative w-full mb-3">
              <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                  Title
              </label>
              <input       onChange={(e)=>setTitle(e.target.value)}                    type="text"
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
              <input         onChange={(e)=>setSubject(e.target.value)}                   type="text"
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
              <SwipeAsks  />
          </div>
          <div className="text-center mt-6">
              <button                           className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}>Confirm</button>
                          
                        <a
            type='button'
            className="cursor-pointer text-gray-600 pt-3"
            onClick={()=>router.replace('/')}
          >
            <small className="cursor-pointer text-sm">Cancel</small>
          </a>
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

