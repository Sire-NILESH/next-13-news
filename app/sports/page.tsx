import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import HighlightsBanner from "../../components/HighlightsBanner";
import { Metadata } from "next";
import { getNews } from "@/lib/requests";
import { Headline } from "@/types";

export const metadata: Metadata = {
  title: "Sports News",
};

export default async function SportsPage() {
  const sportsNews: Headline = await getNews("sports", "in");

  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Highlights in&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Sports&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          {"A glance at quick insights into the headlines and trends."}
        </h2>
      </div>

      <div className="mb-28">
        <HighlightsBanner articles={sportsNews.articles} />
      </div>

      <InfoPageCards articles={sportsNews.articles} />
    </section>
  );
}
