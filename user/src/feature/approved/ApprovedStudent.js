import { Headings } from "../../ui/Headings";
import Loader from "../../ui/Loader";
import { Table, TContainer } from "../../ui/Table";
import { useRequest } from "../request/useRequest";

const DummyData = [
  "Student Name",
  "Student Roll No",
  "branch",
  "Semester",
  "Book id",
  "Book Name",
  "Action",
];

const ApprovedStudent = () => {
  const { requests, isPending } = useRequest();

  const approvedRequests = requests.filter(
    (request) => request.books.action_by_admin === "approve"
  );

  if (isPending) return <Loader />;
  return (
    <TContainer variation="request">
      {approvedRequests.length ? (
        <Table>
          <thead>
            <tr>
              {DummyData.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {approvedRequests.map((approve, index) => (
              <tr>
                <td>{approve.full_name}</td>
                <td>{approve.roll_no}</td>
                <td>{approve.branch}</td>
                <td>{approve.semester}</td>
                <td>{approve.book_id}</td>
                <td>{approve.books.book_name}</td>
                <td>pending/taken</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Headings as="h2">No Approved Requests</Headings>
      )}
    </TContainer>
  );
};

export default ApprovedStudent;
