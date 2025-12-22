export interface Page {
  isActive: boolean;
  slugEn: string;
  slugFr: string;
  titleEn: string;
  titleFr: string;
  contentEn: string;
  contentFr: string;
  createdAt?: string; 
  updatedAt?: string;
}

// Query response types
export interface GetPageResponse {
  page: Page | null;
}