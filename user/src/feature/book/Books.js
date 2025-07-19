import styled from "styled-components";
import { Headings } from "../../ui/Headings";
import Sort from "../../ui/Sort";
import BookTable from "./BookTable";
import { useBooks } from "./useBooks";
import Loader from "../../ui/Loader";
import { Input } from "../../ui/Input";
import { useState } from "react";

const StyledBooks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem !important;
`;

const InputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  margin-top: 2rem !important;
`;

const Books = () => {
  const { books, isPending } = useBooks();
  const [searchBook, setSearchBook] = useState();

  // filtered
  const filteredBooks = searchBook
    ? books.filter((book) => {
        const search = searchBook.toLowerCase();
        return (
          book.book_name.toLowerCase().includes(search) ||
          book.author.toLowerCase().includes(search) ||
          book.publisher.toLowerCase().includes(search) ||
          book.subject.toLowerCase().includes(search) ||
          book.shelf_no.toString().includes(search)
        );
      })
    : books;

  return (
    <StyledBooks>
      <Headings as="h2">Books</Headings>
      <Headings as="h3">Manage your library collection</Headings>
      <InputStyled>
        <Input
          onChange={(e) => setSearchBook(e.target.value)}
          type="text"
          placeholder="search by name, subject, author, publisher"
        />
        <Sort />
      </InputStyled>
      {isPending ? <Loader /> : <BookTable data={filteredBooks} />}
    </StyledBooks>
  );
};

export default Books;
