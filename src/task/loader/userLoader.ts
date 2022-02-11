import * as DataLoader from 'dataloader';
import { User } from 'src/auth/user.entity';

const batchUser = async (ids) => {
  const users = await User.findByIds(ids);
  const userMap: { [key: string]: User } = {};
  users.forEach((user) => (userMap[user.id] = user));
  return ids.map((id) => userMap[id]);
};
export const userLoader = new DataLoader<string, User>(batchUser);
