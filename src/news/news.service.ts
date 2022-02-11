import axios, { AxiosResponse } from 'axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { News } from './models/newsData.model';
import { NewsQueryResult } from './types/newsDataType';
import { GetPostDto } from './dto/getPost.dto';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class NewsService {
  async getAllPost(getPostDto: GetPostDto): Promise<AxiosResponse<News>> {
    const { hitsPerPage, pageNumber, query } = getPostDto;
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://hn.algolia.com/api/v1/search',
        params: {
          query,
          hitsPerPage,
          page: pageNumber,
        },
      });
      return data.hits;
    } catch {
      throw new NotFoundException('Data not found');
    }
  }
  async getAuthor(authorDto: AuthorDto) {
    const { author } = authorDto;
    try {
      console.log('got called once');

      const { data } = await axios({
        method: 'GET',
        url: `https://hn.algolia.com/api/v1/users/${author}`,
      });
      return data;
    } catch {
      throw new NotFoundException('Data not found');
    }
  }

  async getAuthorComments(authorDta: AuthorDto) {
    const { author } = authorDta;
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://hn.algolia.com/api/v1/search?tags=comment&tags=author_${author}`,
      });
      return data.hits;
    } catch {
      throw new NotFoundException('Data not found');
    }
  }
  async getAllPostsByUser(
    getPostDto: GetPostDto,
  ): Promise<AxiosResponse<News>> {
    const { hitsPerPage, pageNumber, author } = getPostDto;

    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://hn.algolia.com/api/v1/search',
        params: {
          tags: `author_${author}`,
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
