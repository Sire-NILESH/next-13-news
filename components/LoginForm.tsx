"use client";

import { Input } from "@nextui-org/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
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
import { useDisclosure } from "@nextui-org/modal";
import CustomModal from "./CustomModal";

interface Inputs {
  email: string;
  password: string;
}

const requiredConstants = {
  minRequiredPasswordLength: 6,
  maxRequiredPasswordLength: 20,
  minRequiredNameLength: 2,
  maxRequiredNameLength: 2,
};

const LoginForm = () => {
  const {
    login,
    loginWithGoogle,
    loading,
    error: submitError,
    clearError: clearSubmitError,
  } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data.email, data.password);
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
            {isVisible ? "Hide Password" : "Show Password"}
          </p>
        </button>

        <Button
          color="secondary"
          size="lg"
          fullWidth
          type="submit"
          endContent={
            loading ? (
              <Spinner size="sm" color="white" />
            ) : (
              <RightArrowIcon className="w-4" />
            )
          }
        >
          Get started{" "}
        </Button>

        {/* OAUth logins */}
        <div className="mt-4 space-y-3">
          <Divider className="my-4" />

          <Button
            color="default"
            size="lg"
            fullWidth
            variant="bordered"
            onPress={loginWithGoogle}
            startContent={<GoogleIcon className="h-5 w-5" />}
          >
            Sign in with Google
          </Button>
          <Button
            color="default"
            size="lg"
            fullWidth
            variant="bordered"
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

export default LoginForm;
