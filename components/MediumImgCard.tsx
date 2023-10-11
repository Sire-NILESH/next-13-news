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
      href={article.url ? article.url : undefined}
      aria-label="News article"
      className="max-w-md min-h-[8rem] h-full w-full"
    >
      <Card shadow="sm" className="card-custom-styles w-full h-full">
        <CardBody className="overflow-visible p-0 flex flex-row justify-between">
          <div className="w-[70%] space-y-2 py-4 px-3">
            <div className="flex justify-between items-center">
              <p className="block text-tiny font-semibold">
                {article.published_at &&
                article.published_at !== "1970-01-01T00:00:00Z"
                  ? format(parseISO(article.published_at), "LLLL d, yyyy")
                  : "unknown"}
              </p>
            </div>
            <h4 className="font-bold text-sm">
              {article.title ? article.title : ""}
            </h4>
            {showAuthor && (
              <p className="mt-5 block text-sm font-semibold">
                {`Author : ${article.author ? article.author : "unknown"}`}
                <span className="text-secondary">{`, ${
                  article.source ? article.source : "unknown"
                }`}</span>
              </p>
            )}
          </div>

          <div className="w-[30%] h-full max-h-[13rem]">
            <Image
              alt="Card image"
              removeWrapper
              className="object-cover rounded-none h-full w-full bg-gray-100"
              src={
                article.image ? article.image : "/images/photo-placeholder.jpg"
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
