import LoginForm from "@/components/LoginForm";
import { Logo } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { siteConfig } from "@/config/site";

import { Link } from "@nextui-org/link";
import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center w-full py-8">
      <Card
        shadow="md"
        className="max-w-lg w-full py-5 sm:px-2 sm:py-16 lg:px-4 lg:py-10"
      >
        <CardHeader className="flex-col">
          <Logo className="h-20 w-20 mx-auto" />

          <h2 className={title({ size: "xs" })}>Sign in to your account</h2>
          <p className={"mt-2 text-center text-default-500"}>
            Don&#x27;t have an account?{" "}
            <Link
              as={NextLink}
              href={siteConfig.authMenu.register.href}
              title="Register"
              className="font-semibold text-secondary transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
        </CardHeader>

        <CardBody className="flex items-center justify-center">
          <LoginForm />
        </CardBody>
      </Card>
    </section>
  );
};

export default LoginPage;
