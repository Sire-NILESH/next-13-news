import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Entertainment News",
};

export default async function EntertainmentPage() {
  const entertainmentNews: Headline = await getNews("entertainment");

  return (
    <PageBuilder
      pageTitle={"Entertainment"}
      articles={entertainmentNews.data}
    />
  );
}
