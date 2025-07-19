import supabase, { supabaseUrl } from "./supabase";

export async function fetchBooks({ filter }) {
  let query = supabase.from("books").select("*");
  if (filter) query = query[filter.method](filter.field, filter.value);

  const { data, error } = await query;

  if (error) {
    throw new Error("We could not fetch the books data from the database.");
  }

  return data;
}

export async function createBook(bookData) {
  // const hasImagePath = bookData.book_img?.startWith?.(supabaseUrl);

  // const imageName = hasImagePath
  //   ? bookData.book_img
  //   : `${Math.random()}-${bookData.book_img.name}`.replace("/", "");

  const imageName = `${Math.random()}-${bookData.book_img.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/books/${imageName}`;

  const { data, error } = await supabase
    .from("books")
    .insert([{ ...bookData, book_img: imagePath }])
    .select();

  if (error) {
    throw new Error("We could not create the book in the database.");
  }

  const { error: storageError } = await supabase.storage
    .from("books")
    .upload(imageName, bookData.book_img);

  if (storageError) throw new Error("Image is not uploaded");

  return data;
}

export async function getBookById(id) {
  const { data, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Can't Retrive from the database");

  return data;
}
