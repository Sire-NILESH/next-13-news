import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { format, parseISO } from "date-fns";

type Props = {
  article: Article;
  showAuthor?: boolean;
};

const MediumImgCard = ({ article, showAuthor }: Props) => {
  if (!article) return null;

  return (
    <Link
      isExternal
      href={
        article.url && !article.url.startsWith("https://removed.com")
          ? article.url
          : undefined
      }
      aria-label="News article"
      className="max-w-md min-h-[8rem] h-full w-full"
    >
      <Card shadow="sm" className="w-full h-full">
        <CardBody className="overflow-visible p-0 flex flex-row justify-between">
          <div className="w-[70%] space-y-2 py-4 px-3">
            <div className="flex justify-between items-center">
              <p className="block text-tiny font-semibold">
                {article.publishedAt &&
                article.publishedAt !== "1970-01-01T00:00:00Z"
                  ? format(parseISO(article.publishedAt), "LLLL d, yyyy")
                  : "unknown"}
              </p>
            </div>
            <h4 className="font-bold text-sm">
              {article.title ? article.title : ""}
            </h4>
            {showAuthor && (
              <p className="mt-5 block text-sm font-semibold">
                {`Author : ${article.author ? article.author : "unknown"}`}
                <span className="text-primary">{`, ${
                  article.source.name ? article.source.name : "unknown"
                }`}</span>
              </p>
            )}
          </div>

          <div className="w-[30%] h-full max-h-[13rem]">
            <Image
              alt="Card image"
              removeWrapper
              className="object-cover rounded-none h-full w-full bg-gray-100"
              // src={article.urlToImage ? article.urlToImage : undefined}
              src={
                article.urlToImage
                  ? article.urlToImage
                  : "/images/photo-placeholder.jpg"
              }
              fallbackSrc={"/images/photo-placeholder.jpg"}
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MediumImgCard;
