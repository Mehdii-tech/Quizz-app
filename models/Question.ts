import prisma from '../helpers/prisma'

export const createQuestion = async({category, type, difficulty, question, correct_answer, incorrect_answer, authorId}:any)=>{
    console.log(authorId,'yes')
    const create = await prisma.question.create({
      data: {
        category:category,
        type:type,
        difficulty: difficulty,
        question: question,
        correct_answer: correct_answer,
        incorrect_answer: incorrect_answer,
        // quizz:{connect:{id:quizz.map(quizz=>quizz.id)}},
        User: { connect: { id: authorId } },
      },
    })
    console.log(create)
    return create
}


export const find = async()=>{ const questions = await prisma.question.findMany({})
    return questions
};