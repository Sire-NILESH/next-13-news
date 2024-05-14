import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { parseISO, format } from "date-fns";
import { Link } from "@nextui-org/link";
import { getHTMLParsedString } from "@/lib/utility";

type Props = {
  article: Article;
  isTextClamped?: boolean;
};

const MainCard = ({ article, isTextClamped }: Props) => {
  if (!article) return null;

  return (
    <Link
      isExternal
      href={article.url ? article.url : undefined}
      aria-label="News article"
      className="max-w-lg w-full"
    >
      <Card
        shadow="sm"
        className="card-custom-styles h-full w-full py-4 space-y-4"
      >
        <CardBody className="overflow-visible py-2 space-y-2">
          <div className="w-full h-[15rem] mb-4 overflow-hidden rounded-xl">
            <Image
              alt="Card Image"
              removeWrapper
              className="object-cover w-full h-[15rem]"
              src={
                article.image ? article.image : "/images/photo-placeholder.jpg"
              }
              fallbackSrc={"/images/photo-placeholder.jpg"}
            />
          </div>

          <div className="flex justify-between">
            <p className="block text-tiny font-semibold">
              {article.published_at &&
              article.published_at !== "1970-01-01T00:00:00Z"
                ? format(parseISO(article.published_at), "LLLL d, yyyy")
                : "unknown"}
            </p>
          </div>
          <h4
            className={`font-bold text-large ${
              isTextClamped ? "line-clamp-2" : ""
            }`}
          >
            {article.title ? getHTMLParsedString(article.title, 5) : ""}
          </h4>
          <small
            className={`text-default-500 ${
              isTextClamped ? "line-clamp-3" : ""
            }`}
          >
            {article.description
              ? getHTMLParsedString(article.description, 5)
              : ""}
          </small>
          <p
            className={`block text-sm font-semibold ${
              isTextClamped ? "line-clamp-2" : ""
            }`}
          >
            {`Author : ${article.author ? article.author : "unknown"}`}
            <span className="text-secondary">{`, ${
              article.source ? article.source : "unknown"
            }`}</span>
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MainCard;
