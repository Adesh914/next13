import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client = null;

export const getClient = () => {
    // create a new client if there's no existing one
    // or if we are running on the server.
    if (!client || typeof window === "undefined") {
        client = new ApolloClient({
            link: new HttpLink({
                uri: "http://localhost:3000/api/graphql",
            }),
            cache: new InMemoryCache(),
        });
    }

    return client;
};