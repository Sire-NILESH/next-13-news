import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "General News",
};

export default async function GeneralPage() {
  const generalNews: Headline = await getNews("general");

  return <PageBuilder pageTitle={"General"} articles={generalNews.data} />;
}
