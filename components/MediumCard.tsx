import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { parseISO, format } from "date-fns";

type Props = {
  article: Article;
};

const MediumCard = ({ article }: Props) => {
  if (!article) return null;

  return (
    <Card shadow="sm" className="h-full py-4 max-w-md space-y-4">
      <CardBody className="overflow-visible py-2 space-y-2">
        <div className="flex justify-between">
          <p className="block text-tiny font-semibold">
            {article.publishedAt &&
              format(parseISO(article.publishedAt), "LLLL d, yyyy")}
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
  );
};

export default MediumCard;
