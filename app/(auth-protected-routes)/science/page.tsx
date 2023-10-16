import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Science News",
};

export default async function SciencePage() {
  const scienceNews: Headline = await getNews("science");

  return <PageBuilder pageTitle={"Science"} articles={scienceNews.data} />;
}
