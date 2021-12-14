import Image from 'next/image'
import  SwipeAsks  from './SwipAsks'
import * as Questions from '../../../models/Question'

export default function CreatePopup(){

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
              <SwipeAsks  />
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

