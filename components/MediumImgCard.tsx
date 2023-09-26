import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format, parseISO } from "date-fns";

type Props = {
  article: Article;
  showAuthor?: boolean;
};

const MediumImgCard = ({ article, showAuthor }: Props) => {
  if (!article) return null;

  return (
    <Card shadow="sm" className="max-w-md h-full">
      <CardBody className="overflow-visible py-3 flex flex-row justify-between gap-2">
        <div className="w-[60%] space-y-2">
          <div className="flex justify-between items-center">
            <p className="block text-tiny font-semibold">
              {article.publishedAt &&
                format(parseISO(article.publishedAt), "LLLL d, yyyy")}
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

        <div className="w-[40%]">
          <Image
            alt="Card image"
            className="object-scale-down rounded-md"
            src={article.urlToImage ? article.urlToImage : undefined}
            width={300}
            sizes="100%"
            fallbackSrc={"/images/photo-placeholder.jpg"}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default MediumImgCard;
