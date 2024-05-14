import { Article } from "@/types";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

type Props = {
  article: Article;
};

const BannerImgCard = ({ article }: Props) => {
  return (
    <Card className="w-full h-full overflow-hidden">
      <Image
        alt="News Cover Image"
        isZoomed
        removeWrapper
        className="z-0 w-full h-full object-cover"
        src={article.image ? article.image : "/images/photo-placeholder.jpg"}
        fallbackSrc={"/images/photo-placeholder.jpg"}
      />

      <CardHeader className="absolute z-10 -bottom-8 pb-10 flex-col items-start bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        <p className="text-tiny text-white uppercase font-bold">
          {article.source}
        </p>
        <h4 className="text-gray-50 font-medium text-large text-left line-clamp-3">
          {article.title}
        </h4>
      </CardHeader>
    </Card>
  );
};

export default BannerImgCard;
