import { Injectable, NotFoundException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class TestService {
  async getApiTest() {
    try {
      const { data } = await axios(
        `https://www.dnd5eapi.co/api/conditions/blinded`,
      );
      return data;
    } catch (e) {
      throw new NotFoundException('No data found');
    }
  }
}
