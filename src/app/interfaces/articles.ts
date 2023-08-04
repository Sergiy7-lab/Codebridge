export interface Articles {
  id: string;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
}

export interface ArticleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Articles[];
}
