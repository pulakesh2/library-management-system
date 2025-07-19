import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Headings } from "../../ui/Headings";
import InputLabel, { Input } from "../../ui/Input";
import styled from "styled-components";
import { InputContainer } from "../../ui/StudentAccountStyled";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import Loader from "../../ui/Loader";

export const StyledAuthForm = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-content: center;
  justify-content: center;
  width: 40dvw;

  margin: 5rem auto;
  padding: 2rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledHeading = styled.div`
  text-align: center;
`;

const SignIn = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { mutate, isPending } = useLogin();

  function onSuccess(data) {
    mutate(
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
        <Headings as="h3">Sign in to your account</Headings>
      </StyledHeading>
      <InputContainer>
        <InputLabel error={errors.email?.message}>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            {...register("email", { required: "Your email is required" })}
          />
        </InputLabel>

        <InputLabel error={errors.password?.message}>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", { required: "Your password is required" })}
          />
        </InputLabel>
      </InputContainer>

      <Button type="submit" variation="primary" size="medium">
        Sign in
      </Button>

      <div>
        Don't Have an Account, Create one <Link to="/signup">Click Here</Link>
      </div>
    </StyledAuthForm>
  );
};

export default SignIn;
