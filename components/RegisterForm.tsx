"use client";

import { Input } from "@nextui-org/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  FacebookColoredIcon,
  GoogleIcon,
  RightArrowIcon,
} from "@/components/icons";
import { Divider } from "@nextui-org/divider";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { Spinner } from "@nextui-org/spinner";
import { useDisclosure } from "@nextui-org/modal";
import CustomModal from "./CustomModal";

interface Inputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const requiredConstants = {
  minRequiredPasswordLength: 6,
  maxRequiredPasswordLength: 20,
  minRequiredNameLength: 2,
  maxRequiredNameLength: 30,
};

const RegisterForm = () => {
  const {
    register: registerUser,
    loading,
    error: submitError,
    clearError: clearSubmitError,
  } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await registerUser(data.email, data.name, data.password);
    reset();
  };

  // Modal controls
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (submitError) {
      onOpen();
    }
  }, [submitError]);

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        message={submitError?.message}
        description={submitError?.description}
        actionFn={clearSubmitError}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <Input
          size={"md"}
          fullWidth
          isClearable
          isRequired
          className="text-default-700"
          type="email"
          label="Email"
          errorMessage={
            errors.email
              ? errors.email.type === "pattern"
                ? "Enter a valid email"
                : "Email is required"
              : undefined
          }
          isInvalid={errors.email ? true : false}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
          })}
        />

        <Input
          size={"md"}
          fullWidth
          isClearable
          isRequired
          className="text-default-700"
          type="text"
          label={"Name"}
          errorMessage={
            errors.name
              ? errors.name.type === "minLength"
                ? `Name must be at least ${requiredConstants.minRequiredNameLength} characters long`
                : errors.name.type === "maxLength"
                ? `Name must be at most ${requiredConstants.maxRequiredNameLength} characters long`
                : "Name is required"
              : undefined
          }
          {...register("name", {
            required: true,
            minLength: requiredConstants.minRequiredNameLength,
            maxLength: requiredConstants.maxRequiredNameLength,
          })}
        />

        <Input
          size={"md"}
          fullWidth
          isClearable
          isRequired
          className="text-default-700"
          type={isVisible ? "text" : "password"}
          label={"Password"}
          errorMessage={
            errors.password
              ? errors.password.type === "minLength"
                ? `Password must be at least ${requiredConstants.minRequiredPasswordLength} characters long`
                : errors.password.type === "maxLength"
                ? `Password must be at most ${requiredConstants.maxRequiredPasswordLength} characters long`
                : "Password is required"
              : undefined
          }
          {...register("password", {
            required: true,
            minLength: requiredConstants.minRequiredPasswordLength,
            maxLength: requiredConstants.maxRequiredPasswordLength,
          })}
        />

        <Input
          size={"md"}
          fullWidth
          isClearable
          isRequired
          className="text-default-700"
          type={isVisible ? "text" : "password"}
          label={"Confirm Password"}
          errorMessage={
            errors.confirmPassword
              ? errors.confirmPassword.type === "minLength"
                ? `Password must be at least ${requiredConstants.minRequiredPasswordLength} characters long`
                : errors.confirmPassword.type === "maxLength"
                ? `Password must be at most ${requiredConstants.maxRequiredPasswordLength} characters long`
                : errors.confirmPassword.type === "validate"
                ? errors.confirmPassword.message
                : "Confirm your password"
              : undefined
          }
          {...register("confirmPassword", {
            required: true,
            minLength: requiredConstants.minRequiredPasswordLength,
            maxLength: requiredConstants.maxRequiredPasswordLength,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />

        {/* Show/hide passwords button */}
        <button
          className="focus:outline-none flex items-center space-x-2"
          type="button"
          onClick={toggleVisibility}
        >
          <div className="">
            {isVisible ? (
              <EyeSlashFilledIcon className="h-5 w-5 text-default-500 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="h-5 w-5 text-default-500 pointer-events-none" />
            )}{" "}
          </div>
          <p className="text-default-500 text-sm">
            {isVisible ? "Hide Passwords" : "Show Passwords"}
          </p>
        </button>

        <Button
          color="secondary"
          size="lg"
          fullWidth
          type="submit"
          endContent={
            loading ? (
              <Spinner size="sm" color="default" />
            ) : (
              <RightArrowIcon className="w-4" />
            )
          }
        >
          Register now{" "}
        </Button>

        {/* OAUth logins */}
        <div className="mt-4 space-y-3">
          <Divider className="my-4" />

          <Button
            color="default"
            size="lg"
            fullWidth
            variant="bordered"
            type="button"
            // onPress={onClickHandler}
            startContent={<GoogleIcon className="h-5 w-5" />}
          >
            Sign in with Google
          </Button>
          <Button
            color="default"
            size="lg"
            fullWidth
            variant="bordered"
            type="button"
            // onPress={onClickHandler}
            isDisabled
            startContent={<FacebookColoredIcon className="h-5 w-5" />}
          >
            Sign in with Facebook
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
