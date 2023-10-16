import { getNews } from "@/lib/requests";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Technology News",
};

export default async function TechnologyPage() {
  const technologyNews = await getNews("technology");

  return (
    <PageBuilder pageTitle={"Technology"} articles={technologyNews.data} />
  );
}
