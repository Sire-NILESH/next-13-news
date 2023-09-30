import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import HighlightsBanner from "../../components/HighlightsBanner";
import { getKeywordNews } from "@/lib/requests";
import { Headline } from "@/types";

export const metadata: Metadata = {
  title: "Gaming News",
};

export default async function GamingPage() {
  const gamingNews: Headline = await getKeywordNews("game");

  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Highlights in&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Gaming&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          {
            "Powering up your Gaming World: Bringing you the Hottest Gaming News and Insights."
          }
        </h2>
      </div>

      <div className="mb-28">
        <HighlightsBanner articles={gamingNews.articles} />
      </div>

      <InfoPageCards articles={gamingNews.articles} />
    </section>
  );
}
