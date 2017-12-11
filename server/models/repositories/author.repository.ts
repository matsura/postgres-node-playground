import { BaseRepository } from './base/base.repository';
import { Author } from '../author.model';

export class AuthorRepository extends BaseRepository<Author> {

  constructor() {
    super(Author);
  }
}
