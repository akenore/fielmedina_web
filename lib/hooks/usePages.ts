'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PAGE } from '@/lib/graphql/queries';
import type { GetPageResponse } from '@/lib/graphql/types';

// Hook to get a specific page
export function usePage(slug: string, language?: string) {
  return useQuery<GetPageResponse>(GET_PAGE, {
    variables: { slug, language },
    skip: !slug,
  });
}
