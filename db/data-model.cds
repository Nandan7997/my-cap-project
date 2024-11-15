namespace my.bookshop;

entity Books {
    ID: UUID;
    title: String(111);
    author: String(100);
    stock: Integer;
}
