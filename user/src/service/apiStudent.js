import supabase from "./supabase";

export async function fetchRequests() {
  const { data, error } = await supabase
    .from("students")
    .select(
      `
      *,
      books (*)
    `
    )
    .eq("status", "request"); // filter where status is "request"

  if (error) {
    throw new Error("We could not fetch the requests data from the database.");
  }

  return data;
}

export async function fetchRequestsByUser(full_name) {
  const { data, error } = await supabase
    .from("students")
    .select(
      `
      *,
      books (*)
    `
    )
    .eq("full_name", full_name); // filter by full_name

  if (error) {
    throw new Error("We could not fetch the user-specific requests.");
  }

  return data;
}

export async function createBookByStudent(studentData) {
  // Step 1: Insert student with book_id
  const { data: student, error: insertError } = await supabase
    .from("students")
    .insert([studentData]);

  if (insertError) {
    console.log("insert bookid with", insertError);
    throw new Error("Failed to create student with book reference.");
  }

  // Step 2: Update book status to 'request'
  const { error: updateError } = await supabase
    .from("books")
    .update({ action_by_admin: "request" })
    .eq("id", Number(studentData.book_id));

  if (updateError) {
    console.log("request error", updateError);
    throw new Error("Failed to update book status to 'request'.");
  }

  return student;
}

export async function approvedStudent({ id, message }) {
  // console.log(id, message);
  const { data, error } = await supabase
    .from("students")
    .update({ status: "approved", message }) // set status to "approved"
    .eq("id", id) // match the specific student by id
    .select(); // optional: returns the updated row(s)

  if (error) {
    throw new Error("Could not approve the student: " + error.message);
  }

  return data; // optional: you can return the updated student data if needed
}

export async function fetchApproved() {
  const { data, error } = await supabase
    .from("students")
    .select(
      `
      *,
      books:book_id (
        *
      )
    `
    )
    .neq("status", "request"); // exclude status === "request"

  if (error) {
    throw new Error("Failed to fetch approved student data");
  }

  return data;
}

export async function deleteStudent(id) {
  // Step 1: Get the book_id from the student row
  const { data: student, error: fetchError } = await supabase
    .from("students")
    .select("book_id")
    .eq("id", id)
    .single();

  if (fetchError || !student) {
    throw new Error("Failed to fetch student to retrieve book_id");
  }

  const bookId = student.book_id;

  // Step 2: Increase available_quantity by 1 in books table
  const { data: book, error: bookFetchError } = await supabase
    .from("books")
    .select("available_quantity")
    .eq("id", bookId)
    .single();

  if (bookFetchError || !book) {
    throw new Error("Failed to fetch book for updating quantity");
  }

  const updatedQuantity = book.available_quantity + 1;

  const { error: bookUpdateError } = await supabase
    .from("books")
    .update({ available_quantity: updatedQuantity })
    .eq("id", bookId);

  if (bookUpdateError) {
    throw new Error("Failed to update book quantity before deleting student");
  }

  // Step 3: Delete student
  const { error: deleteError } = await supabase
    .from("students")
    .delete()
    .eq("id", id);

  if (deleteError) {
    throw new Error("Failed to delete student after updating book quantity");
  }

  // return true;
}

export async function bookTaken(studentId) {
  // Step 1: Get student row to find book_id
  const { data: student, error: studentError } = await supabase
    .from("students")
    .select("book_id")
    .eq("id", studentId)
    .single();

  if (studentError || !student) {
    console.log("studentError", studentError);
    throw new Error("Failed to fetch student or book_id not found");
  }

  const bookId = student.book_id;

  // Step 2: Update student's status to 'taken'
  const { data, error: studentUpdateError } = await supabase
    .from("students")
    .update({ status: "taken" })
    .eq("id", studentId);

  if (studentUpdateError) {
    console.log("studentUpdateError", studentUpdateError);
    throw new Error("Failed to update student's status to 'taken'");
  }

  // Step 3: Decrease book's available_quantity by 1
  // First, get current quantity
  const { data: book, error: bookError } = await supabase
    .from("books")
    .select("available_quantity")
    .eq("id", bookId)
    .single();

  if (bookError || !book) {
    console.log("bookError", bookError);
    throw new Error("Failed to fetch book or its quantity");
  }

  // Ensure it doesn't go below 0
  const newQuantity = Math.max(book.available_quantity - 1, 0);

  const { error: updateBookError } = await supabase
    .from("books")
    .update({ available_quantity: newQuantity })
    .eq("id", bookId);

  if (updateBookError) {
    console.log("updateBookError", updateBookError);
    throw new Error("Failed to update book's available quantity");
  }

  return data;
}

export async function getMessage(studentName) {
  console.log(studentName);
  const { data, error } = await supabase
    .from("students")
    .select("message")
    .eq("full_name", studentName);

  if (error) {
    throw new Error("Failed to fetch message");
  }

  return data; // return just the message string
}
