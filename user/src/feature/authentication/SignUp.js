import { StyledAuthForm, StyledHeading } from "./SignIn";
import { Headings } from "../../ui/Headings";
import { InputContainer } from "../../ui/StudentAccountStyled";
import InputLabel, { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import Loader from "../../ui/Loader";

const SignUp = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { mutate: signup, isPending } = useSignUp();

  function onSuccess(data) {
    console.log(data);

    signup(
      { ...data },
      {
        onSettled: reset,
      }
    );
  }

  if (isPending) return <Loader />;

  return (
    <StyledAuthForm onSubmit={handleSubmit(onSuccess)}>
      <StyledHeading>
        <Headings as="h2">Library Management System</Headings>
        <Headings as="h3">Sign Up to your account</Headings>
      </StyledHeading>
      <InputContainer>
        <InputLabel error={errors.full_name?.message}>
          <label htmlFor="full_name">Full Name:</label>
          <Input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter your full name"
            {...register("full_name", { required: "full name is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.roll_no?.message}>
          <label htmlFor="roll_no">Roll No:</label>
          <Input
            type="number"
            id="roll_no"
            name="roll_no"
            placeholder="Enter your roll number"
            {...register("roll_no", { required: "roll no is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.semester?.message}>
          <label htmlFor="semester">Semester:</label>
          <Input
            type="number"
            id="semester"
            name="semester"
            placeholder="Enter your semester"
            {...register("semester", { required: "semester is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.branch?.message}>
          <label htmlFor="branch">Branch:</label>
          <Input
            type="text"
            id="branch"
            name="branch"
            placeholder="Enter your branch"
            {...register("branch", { required: "branch is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.ph_num?.message}>
          <label htmlFor="ph_num">Phone Number:</label>
          <Input
            type="tel"
            id="phone_no"
            name="phone_no"
            placeholder="Enter your phone number"
            {...register("phone_no", { required: "phone number is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.email?.message}>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            {...register("email", { required: "email is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.password?.message}>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
        </InputLabel>

        <label htmlFor="confirm_password">Confirm Password:</label>
        <Input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="confirm your password"
        />
      </InputContainer>
      <Button variation="primary" size="medium" type="submit">
        Sign Up
      </Button>
    </StyledAuthForm>
  );
};

export default SignUp;
