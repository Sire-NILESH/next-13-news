import React from "react";
import MediumImgCard from "./MediumImgCard";
import { Article } from "@/types";

type Props = {
  articles: Article[];
  title: string;
  subtitle: string;
};

const MediumImgCardsSection = ({ articles, title, subtitle }: Props) => {
  if (articles && articles.length === 0) return null;

  return (
    <section className="space-y-5">
      <header className="mx-4 space-y-2">
        <div className="flex items-center gap-5">
          <h4 className="font-semibold uppercase text-xl">{title}</h4>
        </div>

        <p className="text-left text-tiny">{subtitle}</p>
      </header>

      <div className="grid grid-cols-6 gap-5">
        {articles.map((article, i) => (
          <div
            key={i}
            className="col-span-6 md:col-span-3 lg:col-span-2 justify-self-center w-full"
          >
            <MediumImgCard article={article} showAuthor isTextClamped />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediumImgCardsSection;
