import { User } from './user';

export type Publication = {
  id: number;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    userId: string;
    crm: string;
    specialty: string;
    user: User;
  };
};

export type PostType = {
  publicationId: number;
  publication: Publication;
};
