import { Table, TContainer } from "../../ui/Table";
import styled from "styled-components";
import { formatDate } from "../../helper/formatDate";
import { Link } from "react-router-dom";
import { Headings } from "../../ui/Headings";

const BookHeaderData = [
  "Book Name",
  "Author",
  "Publisher",
  "Subject",
  "Year of Publication",
  "Available Quantity",
];

const StyledBookLink = styled(Link)`
  text-decoration: none;
  color: var(--color-light-text-primary);
`;

const EmptyMessage = styled(Headings)`
  padding: 1rem 2rem;
`;

const BookTable = ({ data }) => {
  return (
    <TContainer>
      {!data.length ? (
        <EmptyMessage as="h3">No Book Available</EmptyMessage>
      ) : (
        <Table>
          <thead>
            <tr>
              {BookHeaderData.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((book, index) => (
              <tr key={index}>
                <td>
                  <StyledBookLink to={`${book.id}`}>
                    {book.book_name}
                  </StyledBookLink>
                </td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.subject}</td>
                <td>{formatDate(book.year_of_publication)}</td>
                <td>{book.available_quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </TContainer>
  );
};

export default BookTable;
