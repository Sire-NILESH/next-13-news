import InfoPageCards from "@/components/InfoPageCards";
import { subtitle, title } from "@/components/primitives";
import { Metadata } from "next";
import HighlightsBanner from "@/components/HighlightsBanner";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getKeywordNews } from "@/lib/requests";
import { Headline } from "@/types";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Crypto News",
};

export default async function CryptoPage() {
  const gamingNews: Headline = await getKeywordNews("crypto cryptocurrency");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Highlights in&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Crypto&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            {
              "Powering up your Crypto World: Bringing you the hottest Crypto News and Insights."
            }
          </h2>
        </div>

        <div className="mb-28">
          <HighlightsBanner articles={gamingNews.data} />
        </div>

        <InfoPageCards articles={gamingNews.data} />
      </section>
    </Suspense>
  );
}
