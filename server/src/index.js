const { GraphQLServer } = require('graphql-yoga')
const { links } = require('../seed')
const { findById } = require('../helpers')

let idCount = links.length



const resolvers = {
    Query: {
        info: () => `This is the API`,
        feed: () => links,
        link: (root, args) => {
            return findById(args, links, (link)=>link)
        }
    },
    Mutation: {
        post: (root, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        },
        updateLink: (root, args) => {
            return findById(args, links, link => {
                link.description = args.description || link.description
                link.url = args.url || link.url
                return link
            })
        },
        deleteLink: (root, args) => {
            return findById(args, links, (link,index,links) => {
                return links.pop(links[index])
            })
        }
    },
    Link: {
        id: (root) => root.id,
        description: (root) => root.description,
        url: (root) => root.url,
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))

