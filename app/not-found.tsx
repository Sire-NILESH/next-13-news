import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 text-default-600 flex flex-col items-center">
      <h2 className="text-lg">404 | Not Found</h2>
      <p className="text-sm mb-6">Could not find requested resource</p>

      <Button as={NextLink} variant="flat" href={"/"}>
        Return Home
      </Button>
    </div>
  );
}
