import { gql } from 'graphql-tag';

export const PAGE_FRAGMENT = gql`
  fragment PageFragment on PageType {
    isActive
    slugEn
    slugFr
    titleEn
    titleFr
    contentEn
    contentFr
    createdAt
    updatedAt
  }
`;
export const GET_PAGE = gql`
  ${PAGE_FRAGMENT}
  query GetPage($slug: String!) {
    page(slug: $slug) {
      ...PageFragment
    }
  }
`;