import { gql } from '@apollo/client';


export const GET_THOUGHTS = gql`
    query getThoughts {
        thoughts {
            image
            _id
            thoughtText
            thoughtAuthor
            createdAt
            comments {
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`
