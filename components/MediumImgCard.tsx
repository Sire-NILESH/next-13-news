import { Article } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { parseISO, format } from "date-fns";

type Props = {
  article: Article;
};

const MediumImgCard = ({ article }: Props) => {
  return (
    <Card className="py-4 max-w-md">
      <CardBody className="overflow-visible py-2 flex flex-row justify-between gap-2">
        <div className="w-[60%] space-y-2">
          <div className="flex justify-between items-center">
            {/* <p className="block text-sm font-bold">
            {article.source.name}
         </p> */}
            <p className="block text-tiny font-semibold">
              {article.publishedAt &&
                format(parseISO(article.publishedAt), "LLLL d, yyyy")}
            </p>
          </div>
          <h4 className="font-bold text-sm">{article.title}</h4>
          {/* <small className="text-default-500">{article.description}</small> */}
          <p className="block text-sm font-semibold">
            {`Author : ${article.author}`}
            <span className="text-primary">{`, ${article.source.name}`}</span>
          </p>
        </div>

        <div className="w-[40%]">
          <Image
            alt="Card background"
            className="object-cover rounded-md"
            src={
              article.urlToImage
                ? article.urlToImage
                : "https://images.pexels.com/photos/10224729/pexels-photo-10224729.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            //   width={300}
            sizes="100%"
            fallbackSrc={
              "https://images.pexels.com/photos/10224729/pexels-photo-10224729.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default MediumImgCard;
