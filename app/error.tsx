"use client";

import { Button } from "@nextui-org/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mt-20 text-default-600 flex flex-col items-center">
      <h2 className="text-lg">500 | Internal server error</h2>
      <p className="text-sm mb-6">
        Something went worng, please try again later.
      </p>

      <Button
        variant="flat"
        className="text-sm font-normal"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
