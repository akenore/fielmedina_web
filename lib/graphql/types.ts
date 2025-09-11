export interface Page {
  id: string;
  slug: string;
  language: string;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Query response types
export interface GetPageResponse {
  page: Page | null;
}
