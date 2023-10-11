import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import HighlightsBanner from "@/components/HighlightsBanner";
import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Entertainment News",
};

export default async function EntertainmentPage() {
  const entertainmentNews: Headline = await getNews("entertainment");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Highlights in&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Entertainment&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            {"A glance at quick insights into the headlines and trends."}
          </h2>
        </div>

        <div className="mb-28">
          <HighlightsBanner articles={entertainmentNews.data} />
        </div>

        <InfoPageCards articles={entertainmentNews.data} />
      </div>
    </Suspense>
  );
}
