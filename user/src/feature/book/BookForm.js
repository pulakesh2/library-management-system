import { Button } from "../../ui/Button";
import { Headings } from "../../ui/Headings";
import InputLabel, { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import { InputContainer } from "../../ui/StudentAccountStyled";
import {
  StyledAuthForm as StyleBookForm,
  StyledHeading,
} from "../Authentication/SignIn";
import { useCreateBook } from "./useCreateBook";
import { useContext } from "react";
import { ModalContext } from "../../ui/Modal";

const BookForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { create } = useCreateBook();
  const { errors } = formState;
  const { close } = useContext(ModalContext);

  const onSuccess = (data) => {
    const book_img = data.book_img[0];
    create(
      { ...data, available_quantity: data.total_quantity, book_img },
      {
        onSettled: () => reset(),
        onSuccess: close,
      }
    );
  };

  return (
    <StyleBookForm onSubmit={handleSubmit(onSuccess)}>
      <StyledHeading>
        <Headings as="h2">Add Book</Headings>
      </StyledHeading>

      <InputContainer>
        <InputLabel error={errors.book_name?.message}>
          <label htmlFor="book_name">Book Name:</label>
          <Input
            type="text"
            id="book_name"
            name="book_name"
            placeholder="Enter book name"
            {...register("book_name", { required: "Book name is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.author?.message}>
          <label htmlFor="author">Author Name:</label>
          <Input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author name"
            {...register("author", { required: "Author name is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.publisher?.message}>
          <label htmlFor="publisher">Publisher:</label>
          <Input
            type="text"
            id="publisher"
            name="publisher"
            placeholder="Enter publisher name"
            {...register("publisher", { required: "Publisher is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.subject?.message}>
          <label htmlFor="subject">Subject:</label>
          <Input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            {...register("subject", { required: "Subject is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.year_of_publication?.message}>
          <label htmlFor="year_of_publication">Year of Publication:</label>
          <Input
            type="date"
            id="year_of_publication"
            name="year_of_publication"
            placeholder="Enter year of publication"
            {...register("year_of_publication", {
              required: "Year of publication is required",
            })}
          />
        </InputLabel>

        <InputLabel error={errors.total_quantity?.message}>
          <label htmlFor="total_quantity">Total Quantity:</label>
          <Input
            type="number"
            id="total_quantity"
            name="total_quantity"
            placeholder="Enter total quantity"
            {...register("total_quantity", {
              required: "Total quantity is required",
            })}
          />
        </InputLabel>

        <InputLabel error={errors.shelf_no?.message}>
          <label htmlFor="shelf_no">Shelf No:</label>
          <Input
            type="text"
            id="shelf_no"
            name="shelf_no"
            placeholder="Enter shelf number"
            {...register("shelf_no", { required: "Shelf number is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.shelf_no?.message}>
          <label htmlFor="book_img">Book Image:</label>
          <Input
            type="file"
            id="book_img"
            name="book_img"
            // placeholder="Enter shelf number"
            {...register("book_img", { required: "Book image is required" })}
          />
        </InputLabel>
      </InputContainer>

      <Button type="submit" variation="primary" size="medium">
        Add Book
      </Button>
    </StyleBookForm>
  );
};

export default BookForm;
