const { prisma } = require('./prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user with a new post
  // const newUser = await prisma
  //   .createUser({
  //     name: "Bob",
  //     email: "bob@prisma.io",
  //     posts: {
  //       create: {
  //         title: "The data layer for modern apps",
  //       }
  //     },
  //   })
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // const allPosts = await prisma.posts()
  // console.log(allPosts)

  const postsByUser = await prisma
    .users({
        where: {
          email: "bob@prisma.io"
        }
      })
    

    console.log(postsByUser)
}

main().catch(e => console.error(e))