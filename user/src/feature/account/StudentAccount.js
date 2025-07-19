import { useForm } from "react-hook-form";
import { Headings } from "../../ui/Headings";
import { Input } from "../../ui/Input";
import {
  AccountImage,
  BookAcquire,
  InputContainer,
  StyledButton,
  StyledHeadings,
  StyledSelect,
  StyledStudentAccount,
} from "../../ui/StudentAccountStyled";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";
import Loader from "../../ui/Loader";

const StudentAccount = () => {
  const { user, isPending } = useUser();

  const { register, handleSubmit } = useForm();
  const { mutate: update, isPending: isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState();

  const { user_metadata } = user;

  function onSuccess(data) {
    update({ ...data, avatar });
  }

  if (isPending) return <Loader />;

  return (
    <>
      <StyledStudentAccount onSubmit={handleSubmit(onSuccess)}>
        <StyledHeadings as="h2">Student Account</StyledHeadings>
        <InputContainer>
          <label htmlFor="full_name">Full Name</label>
          <Input
            id="full_name"
            type="text"
            placeholder="Enter your full name"
            defaultValue={user_metadata?.full_name}
            {...register("full_name")}
          />

          <label htmlFor="semester">Semester</label>
          <StyledSelect
            id="semester"
            defaultValue={user_metadata?.semester}
            {...register("semester")}
          >
            <option value="">Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </StyledSelect>

          <label htmlFor="branch">Branch</label>
          <StyledSelect id="branch" {...register("branch")} disabled>
            <option value="">Select Branch</option>
            <option value="cse">Computer Science and Engineering</option>
            <option value="ece">Electronics and Communication</option>
            <option value="me">Mechanical</option>
            <option value="ce">Civil</option>
            <option value="ee">Electrical</option>
            <option value="it">Information Technology</option>
            <option value="bio">Biology</option>
            <option value="chem">Chemistry</option>
            <option value="phy">Physics</option>
            <option value="math">Mathematics</option>
            <option value="en">english</option>
            <option value="other">Other</option>
          </StyledSelect>

          <label htmlFor="roll_no">Roll No</label>
          <Input
            id="roll_no"
            type="text"
            placeholder="Enter your roll number"
            defaultValue={user_metadata?.roll_no}
            {...register("roll_no")}
          />

          <label htmlFor="phone_no">Phone Number</label>
          <Input
            id="phone_no"
            type="text"
            placeholder="Enter your phone number"
            defaultValue={user_metadata?.phone_no}
            {...register("phone_no")}
          />

          <label htmlFor="email">email:</label>
          <Input
            id="email"
            type="text"
            placeholder="Enter your email"
            defaultValue={user_metadata?.email}
            {...register("email")}
          />
        </InputContainer>

        <AccountImage>
          <Headings as="h3">Profile Image</Headings>
          <label htmlFor="image">Upload your image</label>
          <input
            id="image"
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </AccountImage>

        <BookAcquire>
          <Headings as="h3">Book Acquire</Headings>
          <span>Atomic Habits, Start with why, courage to be happy </span>
        </BookAcquire>

        <StyledButton type="submit" variation="primary" size="medium">
          {isUpdating ? "saving..." : "save"}
        </StyledButton>
      </StyledStudentAccount>
    </>
  );
};

export default StudentAccount;
