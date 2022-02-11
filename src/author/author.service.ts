import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { AuthorDto } from '../news/dto/author.dto';

@Injectable()
export class AuthorService {
  async getAuthorComments(authorDta: AuthorDto) {
    const { author, hitsPerPage, pageNumber } = authorDta;
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://hn.algolia.com/api/v1/search?tags=comment&tags=author_${author}`,
        params: {
          hitsPerPage,
          page: pageNumber,
        },
      });
      return data.hits;
    } catch {
      throw new NotFoundException('Data not found');
    }
  }
}
