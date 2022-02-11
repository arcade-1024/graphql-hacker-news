import * as DataLoader from 'dataloader';
import { Author } from '../models/author.model';
import axios from 'axios';
import { NotFoundException } from '@nestjs/common';

async function getAuthor(author: string) {
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
const requestPromises = [];

const batchAuthor = async (authors) => {
  authors.forEach((author) => requestPromises.push(getAuthor(author)));
  const allAuthorData = await Promise.all(requestPromises);
  const authorMap: { [key: string]: Author } = {};
  allAuthorData.forEach((author) => (authorMap[author.username] = author));
  return authors.map((author) => authorMap[author]);
};
export const authorLoader = new DataLoader<string, Author>(batchAuthor);
