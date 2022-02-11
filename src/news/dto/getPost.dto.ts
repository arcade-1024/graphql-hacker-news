import { IsNotEmpty } from 'class-validator';

export class GetPostDto {
  pageNumber: string;
  hitsPerPage: string;
  query?: string;
  author?: string;
}
