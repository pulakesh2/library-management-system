import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useBookById } from "./useBookById";
import Loader from "../../ui/Loader";
import { formatDate } from "../../helper/formatDate";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useState } from "react";
import { useUser } from "../account/useUser";
import { useGetBook } from "./useGetBook";

const ImageContainer = styled.div`
  height: 30rem;
  grid-column: 7/10;
`;

const Image = styled.img`
  height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-column: 1/7;
`;

const StyledBookDetails = styled.div`
  margin: 3rem 5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(10, 1fr);
`;

const CheckBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1/-1;
`;

const BookDetails = () => {
  const navigate = useNavigate();
  const { bookid } = useParams();

  const [checkBook, setCheckBook] = useState(false);

  const { book, isPending } = useBookById(bookid);
  const { user } = useUser();
  const { mutate: getBook, isPending: isgeting } = useGetBook();

  const { full_name, semester, phone_no, roll_no, branch, email, avatar } =
    user.user_metadata;

  const studentData = {
    full_name,
    semester,
    phone_no: Number(phone_no),
    roll_no: Number(roll_no),
    branch,
    email,
    avatar,
    book_id: bookid,
  };

  if (isPending || isgeting) return <Loader />;

  return (
    <StyledBookDetails>
      <Button onClick={() => navigate(-1)} variation="secondary" size="small">
        <HiArrowLongLeft />
      </Button>
      <Details>
        <p>
          Book Name: <span>{book.book_name}</span>
        </p>

        <p>
          Author: <span>{book.author}</span>
        </p>

        <p>
          Publisher: <span>{book.publisher}</span>
        </p>

        <p>
          Subject: <span>{book.subject}</span>
        </p>

        <p>
          Year: <span>{formatDate(book.year_of_publication)}</span>
        </p>

        <p>
          Status: <span>{book.status}</span>
        </p>
        <p>
          Total Quantity: <span>{book.total_quantity}</span>
        </p>

        <p>
          Available Quantity: <span>{book.available_quantity}</span>
        </p>

        <p>
          Self No: <span>{book.shelf_no}</span>
        </p>
      </Details>

      <ImageContainer>
        <Image src={book.book_img} alt="book_image" />
      </ImageContainer>

      <CheckBox>
        <input
          type="checkbox"
          checked={checkBook}
          onChange={() => setCheckBook((check) => !check)}
        />
        <span>Are you sure you want to Get this book</span>
      </CheckBox>

      {book.status === "sold out" ? (
        <Button variation="disable" size="medium">
          SoldOut
        </Button>
      ) : (
        <Button
          variation={checkBook ? "primary" : "disable"}
          onClick={() => {
            getBook(studentData);
          }}
          size="medium"
          disabled={!checkBook}
        >
          Get
        </Button>
      )}
    </StyledBookDetails>
  );
};

export default BookDetails;
