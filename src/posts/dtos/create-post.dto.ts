import { postType } from '../enum/postType.enum';
import { postStatus } from '../enum/postStatus.enum';

// 51. Solution: POST Endpoint and DTO For Posts Controller

export class CreatePostDto {
  title: string;
  postType: postType;
  slug: string;
  status: postStatus;
  content?: string;
  schema?: string;
  featuredImageUrl?: string;
  publishOn?: Date;
  tags?: string[];
  // https://basarat.gitbook.io/typescript/type-system/index-signatures
  metaOptions: [{ key: 'sidebarEnabled'; value: true }];
}
