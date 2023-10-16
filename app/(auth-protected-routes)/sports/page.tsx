import { getKeywordNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Sports News",
};

export default async function SportsPage() {
  const sportsNews: Headline = await getKeywordNews(
    "cricket football soccer golf baseball olympics sports racing worldcup"
  );

  return <PageBuilder pageTitle={"Sports"} articles={sportsNews.data} />;
}
