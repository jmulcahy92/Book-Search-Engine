import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
    mutation Mutation($userId: ID!, $book: String!) {
        addBook(userId: $userId, book: $book) {
            _id
            savedBooks {
                _id
                bookId
                title
                description
                authors
                image
                link
            }
            bookCount
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation RemoveBook($userId: ID!, $bookId: ID!) {
        removeBook(userId: $userId, bookId: $bookId) {
            _id
            savedBooks {
                _id
                authors
                bookId
                description
                image
                link
                title
            }
            bookCount
        }
    }
`