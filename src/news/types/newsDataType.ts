export interface NewsQueryResult {
  hits: [hitsResult];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}

interface hitsResult {
  created_at: string;
  title: string;
  url: string;
  author: string;
  tags: Array<string>;
  _highlightResult: object;
}
