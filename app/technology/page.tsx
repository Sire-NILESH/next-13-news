import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import HighlightsBanner from "../../components/HighlightsBanner";
import { getNews } from "@/lib/requests";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Technology News",
};

export default async function TechnologyPage() {
  const technologyNews = await getNews("technology");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Highlights in&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Technology&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            {"A glance at quick insights into the headlines and trends."}
          </h2>
        </div>

        <div className="mb-28">
          <HighlightsBanner articles={technologyNews.data} />
        </div>

        <InfoPageCards articles={technologyNews.data} />
      </section>
    </Suspense>
  );
}
