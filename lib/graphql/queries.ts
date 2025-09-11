import { gql } from 'graphql-tag';

// GraphQL fragment for Page data
export const PAGE_FRAGMENT = gql`
  fragment PageFragment on PageType {
    id
    slug
    language
    title
    content
    isActive
    createdAt
    updatedAt
  }
`;

// Get a specific page by slug and language
export const GET_PAGE = gql`
  ${PAGE_FRAGMENT}
  query GetPage($slug: String!, $language: String) {
    page(slug: $slug, language: $language) {
      ...PageFragment
    }
  }
`;
