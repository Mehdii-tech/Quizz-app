import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import * as Quiz from "../models/Quiz";
import * as Question from "../models/Question"
import CreatePopup from "./components/ManageQuizz/Create";
import Modal from "./components/Modal";

const Home: NextPage<{
  quizzes: { title: string; authorId: string; id: number; published: boolean, subject:string }[];
}> = (props) => {
  const Router = useRouter()
  const [showModal, setShowModal] = useState(false);
  console.log(props.quizzes)
  return (
    <div className="flex h-1/2 w-full items-center justify-center content-center">
      <div className="grid grid-cols-3 shadow bg-gray-50 p-4 gap-2 rounded-sm">
      {props.quizzes.map(
      (quiz, i) =>
      <>    
      <div key={i} onClick={() => Router.push("/[id]", `/${quiz.id}`)} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{quiz.title}</div>
        <p className="text-gray-700 text-base">
          Yes
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">{quiz.subject}</span>
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">By </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">#winter</span> */}
      </div>
    </div> 
    </>)}
      </div>
      <button className="cursor-pointer" onClick={() => setShowModal(true)}>Open Modal</button>
      <div className="flex justify-center  content-center pt-20">  
      <Modal  
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            >
                           <CreatePopup onClose={() => setShowModal(false)} />
                           
      </Modal>
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const quiz = await Quiz.find()
  const quizzes = JSON.parse(JSON.stringify(quiz));

  return {
    props: {
      quizzes,
    },revalidate: 10,
  };
};

export default Home;