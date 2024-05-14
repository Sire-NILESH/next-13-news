import MainHeadlines from "@/components/MainHeadlines";
import { subtitle, title } from "@/components/primitives";
import { getNews } from "@/lib/requests";
import { Headline } from "@/types";

export default async function Home() {
  const entertainmentNews: Headline = await getNews("entertainment");
  const generalNews: Headline = await getNews("general");
  const technologyNews: Headline = await getNews("technology");

  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-24 py-8">
      <div className="inline-block max-w-3xl text-center justify-center">
        <h1 className={title()}>Delivering&nbsp;</h1>

        <h1 className={title({ color: "violet" })}>{"News"}&nbsp;</h1>
        <br />
        <h1 className={title()}>that matters, wherever you are.</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          {"Your source for Today's Headlines and Tomorrow's Insights!"}
        </h2>
      </div>

      <MainHeadlines
        mainArticles={entertainmentNews.data}
        mediumArticles={generalNews.data}
        mediumImgArticles={technologyNews.data}
      />
    </section>
  );
}
