import gql from 'graphql-tag';

const contentServer = {
  CONTENT_ALL: gql`
    query contents {
      contents {
        id
        title
        description
        type
        url
        embeddable
        allow_download
      }
    }
  `,

  GET_CONTENT: gql`
    query getContent($id: String!) {
      getContent(id: $id) {
        id
        title
        type
        description
        url
        embeddable
        allow_download
        created_at
        updated_at
      }
    }
  `,
}

export default contentServer;