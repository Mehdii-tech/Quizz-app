import Image from 'next/image'


export default function CreatePopup(props:any){


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
                    Use your account to 
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                   
                  >
                    {/* <Image
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../assets/img/github.svg").default}
                      width={25}
                    /> */}
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    
                  >
                    {/* <Image
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../assets/img/google.svg").default}
                      width={25}
                    /> */}
                    Google
                  </button>
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
        <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or  with credentials</small>
        </div>
                    <form >




                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}