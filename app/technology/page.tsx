import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import HighlightsBanner from "../../components/HighlightsBanner";
import { data as TechnologyNews } from "@/dev-data/techNews";

export default function TechnologyPage() {
  return (
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
        <HighlightsBanner articles={TechnologyNews.articles} />
      </div>

      <InfoPageCards articles={TechnologyNews.articles} />
    </section>
  );
}
