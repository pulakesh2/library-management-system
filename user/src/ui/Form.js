import { createContext } from "react";

const formContext = createContext();

function Form({ children }) {
  return (
    <formContext.Provider value={{}}>
      <form>{children}</form>
    </formContext.Provider>
  );
}

function Header({ children }) {
  return <header>{children}</header>;
}

function Row({ children }) {
  //   const { columns } = useContext(TableContext);

  return <div>{children}</div>;
}

function Body({ children }) {
  return <div>{children}</div>;
}

Form.Header = Header;
Form.Row = Row;
Form.Body = Body;

export default Form;
