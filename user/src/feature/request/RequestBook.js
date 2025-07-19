import Loader from "../../ui/Loader";
import { Table, TContainer } from "../../ui/Table";
import { useUser } from "../account/useUser";
import { useRequestByUser } from "./useRequestByUser";

const DummyData = [
  "Student Name",
  "Student Roll No",
  "Semester",
  "Book id",
  "Book Name",
  "status",
];

const RequestBook = () => {
  const {
    user: {
      user_metadata: { full_name },
    },
  } = useUser();

  const { requests, isPending } = useRequestByUser(full_name);

  if (isPending) return <Loader />;

  return (
    <TContainer variation="request">
      <Table>
        <thead>
          <tr>
            {DummyData.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.full_name}</td>
              <td>{request.roll_no}</td>
              <td>{request.semester}</td>
              <td>{request.book_id}</td>
              <td>{request.books.book_name}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TContainer>
  );
};

export default RequestBook;
