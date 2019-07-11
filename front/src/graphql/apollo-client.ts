import ApolloClient from 'apollo-boost/lib/index';
import configModule from "@/store/modules/config/configModule";

class GraphQLClient {
    client: ApolloClient<{}> | null = null;

    get graphQLClient() {
        if (!this.client) {
            this.client = new ApolloClient({
                uri: configModule.config.api.bff.graphql,
                fetch,
            });
            this.client.defaultOptions.query = {
                fetchPolicy: "no-cache"
            };
        }
        return this.client;
    }
}

export default new GraphQLClient();
