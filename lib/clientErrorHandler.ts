import { FirebaseError } from "firebase/app";
import { CustomError } from "@/types";

function isFirebaseError(error: Object): error is FirebaseError {
  return error !== null && (error as FirebaseError).name === "FirebaseError";
}

export function customiseClientError(error: any, email?: string): CustomError {
  let customError: CustomError = {
    errorType: "Unknow Error",
    message: "Oops, something went wrong.",
    description:
      "We're sorry, but it looks like there was an error. Please try again later or contact support if the issue persists.",
  };

  if (isFirebaseError(error)) {
    switch (error.code) {
      case "auth/email-already-in-use":
        customError = {
          errorType: "Firebase auth Error",
          message: "This email is already in use.",
          description: `We're sorry, but it looks like this email${
            email ? ` '${email}'` : ""
          }' is already associated with an account. Please try logging in or use a different email address to create a new account.`,
        } as CustomError;

        break;

      case "auth/invalid-login-credentials" ||
        "auth/invalid-email" ||
        "auth/invalid-password" ||
        "auth/invalid-display-name" ||
        "auth/invalid-photo-url":
        customError = {
          errorType: "Firebase auth Error",
          message: "Invalid credentials.",
          description:
            "We're sorry, but it looks like the credentials you entered is incorrect. Please double-check your credentials and try again.",
        } as CustomError;

        break;
    }
  }

  return customError;
}
