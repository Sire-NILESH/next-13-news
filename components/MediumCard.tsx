import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { parseISO, format } from "date-fns";

type Props = {
  article: Article;
};

const MediumCard = ({ article }: Props) => {
  return (
    <Card shadow="sm" className="py-4 max-w-md space-y-4">
      <CardBody className="overflow-visible py-2 space-y-2">
        <div className="flex justify-between">
          {/* <p className="block text-sm font-bold">
            {article.source.name}
          </p> */}
          <p className="block text-tiny font-semibold">
            {article.publishedAt &&
              format(parseISO(article.publishedAt), "LLLL d, yyyy")}
          </p>
        </div>
        <h4 className="font-bold text-large">{article.title}</h4>
        <small className="text-default-500">{article.description}</small>
        <p className="block text-sm font-semibold">
          {`Author : ${article.author}`}
          <span className="text-primary">{`, ${article.source.name}`}</span>
        </p>
      </CardBody>
    </Card>
  );
};

export default MediumCard;
