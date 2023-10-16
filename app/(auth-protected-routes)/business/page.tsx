import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Business News",
};

export default async function BusinessPage() {
  const businessNews: Headline = await getNews("business");

  return <PageBuilder pageTitle={"Business"} articles={businessNews.data} />;
}
