import { getNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Health News",
};

export default async function HealthPage() {
  const healthNews: Headline = await getNews("health");

  return <PageBuilder pageTitle={"Health"} articles={healthNews.data} />;
}
