import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { parseISO, format } from "date-fns";
import { Link } from "@nextui-org/link";

type Props = {
  article: Article;
};

const MainCard = ({ article }: Props) => {
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
      className="max-w-lg w-full"
    >
      <Card shadow="sm" className="h-full w-full py-4 space-y-4">
        <CardBody className="overflow-visible py-2 space-y-2">
          <div className="w-full h-[50%] mb-4">
            <Image
              alt="Card background"
              removeWrapper
              className="object-cover rounded-xl h-full w-full"
              src={
                article.urlToImage
                  ? article.urlToImage
                  : "/images/photo-placeholder.jpg"
              }
              fallbackSrc={"/images/photo-placeholder.jpg"}
            />
          </div>

          <div className="flex justify-between">
            <p className="block text-tiny font-semibold">
              {article.publishedAt &&
              article.publishedAt !== "1970-01-01T00:00:00Z"
                ? format(parseISO(article.publishedAt), "LLLL d, yyyy")
                : "unknown"}
            </p>
          </div>
          <h4 className="font-bold text-large">
            {article.title ? article.title : ""}
          </h4>
          <small className="text-default-500">
            {article.description ? article.description : ""}
          </small>
          <p className="block text-sm font-semibold">
            {`Author : ${article.author ? article.author : "unknown"}`}
            <span className="text-primary">{`, ${
              article.source.name ? article.source.name : "unknown"
            }`}</span>
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MainCard;
