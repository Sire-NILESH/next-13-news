import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { parseISO, format } from "date-fns";

type Props = {
  article: Article;
};

const MediumCard = ({ article }: Props) => {
  if (!article) return null;

  return (
    <Link
      isExternal
      href={article.url ? article.url : undefined}
      aria-label="News article"
      className="max-w-md h-full w-full"
    >
      <Card shadow="sm" className="h-full w-full py-4 space-y-4">
        <CardBody className="overflow-visible py-2 space-y-2">
          <div className="flex justify-between">
            <p className="block text-tiny font-semibold">
              {article.published_at &&
              article.published_at !== "1970-01-01T00:00:00Z"
                ? format(parseISO(article.published_at), "LLLL d, yyyy")
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
            <span className="text-secondary">{`, ${
              article.source ? article.source : "unknown"
            }`}</span>
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MediumCard;
