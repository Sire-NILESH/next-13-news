import { getKeywordNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Metadata } from "next";
import PageBuilder from "../_components/PageBuilder";

export const metadata: Metadata = {
  title: "Crypto News",
};

export default async function CryptoPage() {
  const cryptoNews: Headline = await getKeywordNews("crypto cryptocurrency");

  return (
    <PageBuilder pageTitle={"Cryptocurrency"} articles={cryptoNews.data} />
  );
}
