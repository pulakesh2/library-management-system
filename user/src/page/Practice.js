import React from "react";
import { Button } from "../ui/Button";
import Modal from "../ui/Modal";
import BookForm from "../feature/book/BookForm";

const Practice = () => {
  return (
    <Modal>
      <Modal.Open opens="addBook">
        <Button variation="primary" size="large">
          Add Book
        </Button>
      </Modal.Open>

      <Modal.Window name="addBook">
        <BookForm />
      </Modal.Window>
    </Modal>
  );
};

export default Practice;
