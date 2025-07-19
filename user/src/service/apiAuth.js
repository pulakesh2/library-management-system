import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error("Couldn't login to your account");
    throw new Error("Couldn't login to your account");
  }

  return { data };
}

export async function signup({
  email,
  password,
  full_name,
  roll_no,
  semester,
  branch,
  phone_no,
}) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
        roll_no,
        semester,
        branch,
        phone_no,
        avatar: "",
      },
    },
  });

  if (error) {
    toast.error("There is a problem occured during sign up");
    throw new Error(error.message);
  }

  return data;
}

export async function getUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error("unable to fetch the user");

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUser({
  email,
  password,
  full_name,
  roll_no,
  semester,
  branch,
  ph_num,
  avatar,
}) {
  const userMetadata = {};
  if (full_name) userMetadata.full_name = full_name;
  if (roll_no) userMetadata.roll_no = roll_no;
  if (semester) userMetadata.semester = semester;
  if (branch) userMetadata.branch = branch;
  if (ph_num) userMetadata.ph_num = ph_num;

  let updateData = {};
  if (email) updateData.email = email;
  if (password) updateData.password = password;
  if (Object.keys(userMetadata).length > 0) updateData.data = userMetadata;

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) {
    console.log(storageError.message);
    throw new Error(error.message);
  }

  const { data: updatedUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) {
    console.log(error2.message);
    throw new Error(error.message);
  }

  return updatedUser;
}
