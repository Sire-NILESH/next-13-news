import RegisterForm from "@/components/RegisterForm";
import { Logo } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center w-full py-8">
      <Card
        shadow="md"
        className="max-w-lg w-full py-5 sm:px-2 sm:py-16 lg:px-4 lg:py-10"
      >
        <CardHeader className="flex-col">
          <Logo className="h-20 w-20 mx-auto" />

          <h2 className={title({ size: "xs" })}>Create your account</h2>
          <p className={"mt-2 text-center text-default-500"}>
            Already have an account?{" "}
            <Link
              as={NextLink}
              href={siteConfig.authMenu.login.href}
              title="Login"
              className="font-semibold text-secondary transition-all duration-200 hover:underline"
            >
              Login now
            </Link>
          </p>
        </CardHeader>

        <CardBody className="flex items-center justify-center">
          <RegisterForm />
        </CardBody>
      </Card>
    </section>
  );
};

export default RegisterPage;
