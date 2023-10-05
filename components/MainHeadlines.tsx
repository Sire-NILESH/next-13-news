import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import MainCard from "./MainCard";
import MediumCard from "./MediumCard";
import MediumImgCard from "./MediumImgCard";
import { RightArrowIcon } from "./icons";
import { Article } from "@/types";
import { useMemo } from "react";

const getNewsWithImgs = (articles: Article[]) => {
  const filtered = articles.filter((article) => Boolean(article.image));

  if (filtered.length > 3) return filtered;
  return articles;
};

type Props = {
  mainArticles: Article[];
  mediumArticles: Article[];
  mediumImgArticles: Article[];
};

const MainHeadlines = ({
  mainArticles,
  mediumArticles,
  mediumImgArticles,
}: Props) => {
  const filteredMainArticlesWithImgs = useMemo(() => {
    return getNewsWithImgs(mainArticles);
  }, [mainArticles]);

  const filteredMediumImgArticles = useMemo(() => {
    return getNewsWithImgs(mediumImgArticles);
  }, [mediumImgArticles]);

  return (
    <div className="w-full grid grid-cols-12 gap-x-5 gap-y-28">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            <h4 className="font-semibold uppercase text-xl">
              {"Entertainment"}
            </h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              href={"/entertainment"}
              variant="flat"
            >
              <RightArrowIcon className="w-4" />
            </Button>
          </div>

          <small className="text-default-500">
            {"See what's happening in the entertainment world."}
          </small>
        </header>

        <div className="flex flex-col justify-center items-start space-y-5">
          <MainCard article={filteredMainArticlesWithImgs[0]} />
          <MainCard article={filteredMainArticlesWithImgs[7]} />
          <MainCard article={filteredMainArticlesWithImgs[4]} />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            <h4 className="font-semibold uppercase text-xl">
              {"General News"}
            </h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              href={"/general"}
              variant="flat"
            >
              <RightArrowIcon className="w-4" />
            </Button>
          </div>

          <small className="block text-default-500">
            {"Bringing you the headlines from around the world."}
          </small>
        </header>

        <div className="space-y-5">
          {mediumArticles.slice(0, 5).map((article, i) => (
            <div key={i} className="flex justify-center">
              <MediumCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            <h4 className="font-semibold uppercase text-xl">{"Technology"}</h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              href={"/technology"}
              variant="flat"
            >
              <RightArrowIcon className="w-4" />
            </Button>
          </div>

          <small className="text-default-500">
            {"Exploring the horizons of Technology, Innovations and Trends."}
          </small>
        </header>

        <div className="grid grid-cols-4 gap-x-3 gap-y-5">
          {filteredMediumImgArticles.slice(3, 13).map((article, i) => (
            <div
              key={i}
              className="col-span-4 md:col-span-2 lg:col-span-4 justify-self-center"
            >
              <MediumImgCard article={article} showAuthor />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHeadlines;
