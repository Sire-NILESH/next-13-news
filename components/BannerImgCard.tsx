import { Article } from "@/types";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

type Props = {
  article: Article;
};

const BannerImgCard = ({ article }: Props) => {
  return (
    <Card className="w-full h-full">
      <CardHeader className="absolute z-10 top-0 pb-10 flex-col items-start bg-gradient-to-b from-black/80 to-transparent">
        <p className="text-tiny text-gray-200 uppercase font-bold">
          {article.source}
        </p>
        <h4 className="text-white/90 font-medium text-large text-left">
          {article.title}
        </h4>
      </CardHeader>

      <Image
        alt="News Cover Image"
        isZoomed
        removeWrapper
        className="z-0 w-full h-full object-cover"
        src={article.image ? article.image : "/images/photo-placeholder.jpg"}
        fallbackSrc={"/images/photo-placeholder.jpg"}
      />
    </Card>
  );
};

export default BannerImgCard;
