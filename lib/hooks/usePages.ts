'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PAGE } from '@/lib/graphql/queries';
import type { GetPageResponse } from '@/lib/graphql/types';

export function usePage(slug: string) {
  return useQuery<GetPageResponse>(GET_PAGE, {
    variables: { slug },
    skip: !slug,
  });
}
