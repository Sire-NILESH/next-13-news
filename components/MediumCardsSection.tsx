import { Article } from "@/types";
import React from "react";
import MediumCard from "./MediumCard";

type Props = {
  articles: Article[];
  title: string;
  subtitle: string;
};

const MediumCardsSection = ({ articles, title, subtitle }: Props) => {
  if (articles && articles.length === 0) return null;

  return (
    <section className="space-y-5">
      <header className="mx-4 space-y-2">
        <div className="flex items-center gap-5">
          <h4 className="font-semibold uppercase text-xl">{title}</h4>
        </div>

        <p className="text-left text-tiny">{subtitle}</p>
      </header>

      <div className="grid grid-cols-4 gap-5">
        {articles.map((article, i) => (
          <div
            key={i}
            className="col-span-4 md:col-span-2 lg:col-span-1 justify-self-center w-full"
          >
            <MediumCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediumCardsSection;
