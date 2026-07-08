const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const path = require("path");

const port = 3000;
const typeDefsArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: typeDefsArray,
    resolvers: resolversArray,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
startApolloServer();
