import { Article } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { parseISO, format } from "date-fns";

type Props = {
  article: Article;
};

const MainCard = ({ article }: Props) => {
  return (
    <Card shadow="sm" className="py-4 max-w-lg space-y-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={
            article.urlToImage
              ? article.urlToImage
              : "https://images.pexels.com/photos/10224729/pexels-photo-10224729.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          sizes="100%"
          fallbackSrc={
            "https://images.pexels.com/photos/10224729/pexels-photo-10224729.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        />
      </CardHeader>
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

export default MainCard;
