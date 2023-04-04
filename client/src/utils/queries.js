import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query User($id: ID!) {
        user(_id: $id) {
            username
            email
            password
        }
    }
`;