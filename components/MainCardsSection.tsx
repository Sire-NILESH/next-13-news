import React from "react";
import MainCard from "./MainCard";
import { Article } from "@/types";

type Props = {
  articles: Article[];
  title: string;
  subtitle: string;
};

const MainCardsSection = ({ articles, title, subtitle }: Props) => {
  if (articles && articles.length === 0) return null;

  return (
    <section className="space-y-5">
      <header className="mx-4 space-y-2">
        <div className="flex items-center gap-5">
          <h4 className="font-semibold uppercase text-xl">{title}</h4>
        </div>

        <p className="text-left text-tiny">{subtitle}</p>
      </header>

      <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4 justify-center w-full">
        <MainCard article={articles[0]} isTextClamped />
        <MainCard article={articles[1]} isTextClamped />
        <MainCard article={articles[2]} isTextClamped />
      </div>
    </section>
  );
};

export default MainCardsSection;
