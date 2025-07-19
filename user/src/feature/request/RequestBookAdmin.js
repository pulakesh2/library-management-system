import Loader from "../../ui/Loader";
import { Table, TContainer } from "../../ui/Table";
import { useRequest } from "./useRequest";

const DummyData = [
  "Student Name",
  "Student Roll No",
  "Semester",
  "Book id",
  "Book Name",
  "Message",
  "status",
  "Action",
];

const RequestBook = () => {
  const { requests, isPending } = useRequest();

  const studentsRequest = requests.filter(
    (request) => request.books.action_by_admin === "request"
  );

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
          {studentsRequest.map((request, index) => (
            <tr key={index}>
              <td>{request.full_name}</td>
              <td>{request.roll_no}</td>
              <td>{request.semester}</td>
              <td>{request.book_id}</td>
              <td>{request.books.book_name}</td>
              <td>Message</td>
              <td>{request.books.action_by_admin}</td>
              <td>Button</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TContainer>
  );
};

export default RequestBook;
