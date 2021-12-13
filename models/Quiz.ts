import prisma from '../helpers/prisma'
// const quizzes = [
//     {
//         id: 1,
//         title: "Quiz N°1",
//         questions: [
//             {
//                 title: "What you'r name ?",
//                 answers: ["a", "b", "c", "d"],
//                 answer: "a",
//             },
//             {
//                 title: "How old are you ?",
//                 answers: ["1", "2", "3", "4"],
//                 answer: "1",
//             },
//         ]
//     },
//     {
//         id: 2,
//         title: "Quiz N°2",
//         questions: [
//             {
//                 title: "What you'r name ?",
//                 answers: ["a", "b", "c", "d"],
//                 answer: "a",
//             },
//             {
//                 title: "How old are you ?",
//                 answers: ["1", "2", "3", "4"],
//                 answer: "1",
//             },
//         ],
//     },
//     {
//         id: 3,
//         title: "Quiz N°3",
//         questions: [
//             {
//                 title: "blabla ?",
//                 answers: ["e", "f", "g", "h"],
//                 answer: "e",
//             },
//             {
//                 title: "Ok ?",
//                 answers: ["1fzeef", "g2", "h3", "h4"],
//                 answer: "h4",
//             },
//         ],
//     },
// ];

export const createQuizz = async({title, subject, published, authorId, question}:any)=>{
    console.log(authorId,'yes')
    const create = await prisma.quizz.create({
      data: {
        title:title,
        subject:subject,
        published:published,
        

        // quizz:{connect:{id:quizz.map(quizz=>quizz.id)}},
        User: { connect: { id: authorId } },
        Question: {
          connect:
            question?.map((question: { id: any }) => ({ id: question.id })) || [],
        }
      },
    })
    console.log(create)
    return create
}

export const find = async () =>{ const quizzes = await prisma.quizz.findMany({

}); return quizzes} ;

export const findOne = async (id: number) =>{
    console.log(id, 'kkkkkkkk')
    const quiz = await prisma.quizz.findUnique({
        where: {
          id: id|| -1,
        },
        include: {
          Question:{
            select:{
          category:true,
          type:true,
          difficulty:true,
          question:true,
          correct_answer:true,
          incorrect_answer:true,}
          }
        },
      });

    return quiz

}