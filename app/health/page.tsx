import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import HighlightsBanner from "../../components/HighlightsBanner";
import { getNews } from "@/lib/requests";
import { Headline } from "@/types";

export const metadata: Metadata = {
  title: "Health News",
};

export default async function HealthPage() {
  const healthNews: Headline = await getNews("health");

  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Highlights in&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Health&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          {"A glance at quick insights into the headlines and trends."}
        </h2>
      </div>

      <div className="mb-28">
        <HighlightsBanner articles={healthNews.articles} />
      </div>

      <InfoPageCards articles={healthNews.articles} />
    </section>
  );
}
