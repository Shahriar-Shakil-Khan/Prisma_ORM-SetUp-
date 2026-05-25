import { prisma } from "./lib/prisma";

async function run(){
    // const createUser = await prisma.user.create({

    //     data: {
    //     email: "elsttsa@prisma.io",
    //     name: "Elstta Prisma",
    // }, 

    // })
    // console.log(createUser)
   
// const createPost = await prisma.post.create({

//         data: {
//         title: "My First Post",
//         content: "This is the content of my first post.",
//         authorId:1 
//     }, 

//     })
//     console.log(createPost)

// const createProfile = await prisma.profile.create({

//         data: {
//         bio: "My First Post",
//         userId:1 
//     }, 

//     })
//     console.log(createProfile)

// const users = await prisma.user.findMany({
//     // include: {
//     //     posts: true,
//     //     profile: true
//     // },
//     select: {
//         id: true,
//         name: true,
//         email: true,
//         posts: true,
//         profile: true
//     }
// });
// console.dir(users, { depth: Infinity });

// const updateUser = await prisma.profile.update({
//     where:{
//         userId:1
//     },
//     data:{
//         bio:"Software Engineer",
//         dateOfBirth:"2026-05-25T15:34:58.009Z"

//     }
// })
    
//   console.log(updateUser)

//  const deleteUser= await prisma.user.delete({
//     where:{
//         id:2
//     }
//  })

// console.log(deleteUser)


 
}

run()