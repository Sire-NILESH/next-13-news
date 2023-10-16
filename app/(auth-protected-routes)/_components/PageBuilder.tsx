import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import HighlightsBanner from "@/components/HighlightsBanner";
import { Article } from "@/types";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {
  pageTitle: string;
  articles: Article[];
};

export default function PageBuilder({ pageTitle, articles }: Props) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Highlights in&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>{pageTitle}&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            {"A glance at quick insights into the headlines and trends."}
          </h2>
        </div>

        <div className="mb-28">
          <HighlightsBanner articles={articles} />
        </div>

        <InfoPageCards articles={articles} />
      </div>
    </Suspense>
  );
}
