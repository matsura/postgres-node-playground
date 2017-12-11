import { BaseRepository } from './base/base.repository';
import { Post } from '../post.model';

export class PostRepository extends BaseRepository<Post> {

  constructor() {
    super(Post);
  }
}
