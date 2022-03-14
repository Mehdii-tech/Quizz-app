import { useRouter } from "next/router"

export default function CardQuizzs(quizzes: any){
    const Router = useRouter()
    const quiz = quizzes.quizzes
    return(
        <div  onClick={() => Router.push("/[id]", `/${quiz.id}`)} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
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
    )
}