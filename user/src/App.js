import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import GlobalStyle from "./Styles/GloabalStyles";
import Book from "./page/Book";
import Request from "./page/Request";
import Message from "./page/Message";
import BookDetails from "./feature/book/BookDetails";
import Account from "./page/Account";
import Approved from "./page/Approved";
import SignIn from "./feature/Authentication/SignIn";
import SignUp from "./feature/Authentication/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import Dashboard from "./page/Dashboard";
// supabase password :  9J58PsnJw26tWuEM

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<Book />} />
            <Route path="account" element={<Account />} />
            <Route path="books/:bookid" element={<BookDetails />} />
            <Route path="request" element={<Request />} />
            <Route path="approved" element={<Approved />} />
            <Route path="message" element={<Message />} />
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            zIndex: 1000,
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
