import { Article } from "@/types";
import { Link } from "@nextui-org/link";
import { useMemo } from "react";
import BannerImgCard from "./BannerImgCard";

type Props = {
  articles: Article[];
};

const HighlightsBanner = ({ articles }: Props) => {
  const filtered = useMemo(() => {
    return articles.filter((a) => Boolean(a.urlToImage));
  }, [articles]);

  return (
    <div className="container gap-2 grid grid-cols-12 grid-rows-2 px-3 md:px-8">
      <Link
        isExternal
        href={
          filtered[0].url && !filtered[0].url.startsWith("https://removed.com")
            ? filtered[0].url
            : undefined
        }
        aria-label="Bannner News"
        className="col-span-12 sm:col-span-4 h-[300px] w-full"
      >
        <BannerImgCard article={filtered[0]} />
      </Link>

      <Link
        isExternal
        href={
          filtered[1].url && !filtered[1].url.startsWith("https://removed.com")
            ? filtered[1].url
            : undefined
        }
        aria-label="Bannner News"
        className="col-span-12 sm:col-span-4 h-[300px] w-full"
      >
        <BannerImgCard article={filtered[1]} />
      </Link>

      <Link
        isExternal
        href={
          filtered[2].url && !filtered[2].url.startsWith("https://removed.com")
            ? filtered[2].url
            : undefined
        }
        aria-label="Bannner News"
        className="col-span-12 sm:col-span-4 h-[300px] w-full"
      >
        <BannerImgCard article={filtered[2]} />
      </Link>

      <Link
        isExternal
        href={
          filtered[3].url && !filtered[3].url.startsWith("https://removed.com")
            ? filtered[3].url
            : undefined
        }
        aria-label="Bannner News"
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <BannerImgCard article={filtered[3]} />
      </Link>

      <Link
        isExternal
        href={
          filtered[4].url && !filtered[4].url.startsWith("https://removed.com")
            ? filtered[4].url
            : undefined
        }
        aria-label="Bannner News"
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <BannerImgCard article={filtered[4]} />
      </Link>
    </div>
  );
};

export default HighlightsBanner;
