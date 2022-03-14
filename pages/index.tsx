import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import * as Quiz from "../models/Quiz";
import CreatePopup from "./components/ManageQuizz/Create";
import Modal from "./components/Modal";
import CardQuizzs from "./components/Quizz/CardQuizzs";

const Home: NextPage<{
  quizzes: { title: string; authorId: string; id: number; published: boolean, subject:string }[];
}> = (props) => {
  const Router = useRouter()
  const [showModal, setShowModal] = useState(false);
  console.log(props.quizzes)
  return (
    <div className="flex h-1/2 w-full items-center justify-center content-center">
      <div className="flex-col space-y-10">
      <h1 className="text-2xl text-center font-bold">Quizzs</h1>
      <button className="cursor-pointer text-center " onClick={() => setShowModal(true)}>Create a quizz</button>
      <div className="flex justify-center  content-center ">  
      <Modal  
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            >
                           <CreatePopup onClose={() => setShowModal(false)} />
                           
      </Modal>
      </div>
      <div className="grid grid-cols-3 shadow bg-gray-50 p-4 gap-2 rounded-sm">
      {props.quizzes.map(
      (quiz, i:number) =>
      
      <div key={i}>
      <CardQuizzs  quizzes={quiz} />
      </div>
    )}
      </div>
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