using my.bookshop as my from '../db/data-model';

service AllBooksService {
    entity Books as projection on my.Books;
}
