import { Article } from "@/types";
import MainCardsSection from "./MainCardsSection";
import MediumCardsSection from "./MediumCardsSection";
import MediumImgCardsSection from "./MediumImgCardsSection";

type Props = {
  articles: Article[];
};

const InfoPageCards = ({ articles }: Props) => {
  return (
    <div className="w-full space-y-28">
      <MediumCardsSection
        title="The Daily Digest"
        subtitle="Your daily dose of news, stories, analysis, and perspectives."
        articles={articles.slice(0, 8)}
      />

      <MainCardsSection
        title="Don't Miss Out"
        subtitle="Catch up on the must-see stories and Editor's picks."
        articles={articles.slice(9, 12)}
      />

      <MediumCardsSection
        title="Editor's Picks"
        subtitle="Handpicked stories for in-depth insights and analysis."
        articles={articles.slice(12, 20)}
      />

      <MediumImgCardsSection
        title="Featured Highlights"
        subtitle="Explore our curated selection of top Stories and exclusive reports."
        articles={articles.slice(21, 33)}
      />

      <MediumCardsSection
        title="Top Stories Roundup"
        subtitle="A quick overview of the day's most important headlines."
        articles={articles.slice(34, 42)}
      />
    </div>
  );
};

export default InfoPageCards;
