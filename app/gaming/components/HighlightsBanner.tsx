import { Card, CardHeader } from "@nextui-org/card";
import { data as gameNews } from "@/dev-data/gameNews";
import { Image } from "@nextui-org/image";

type Props = {};

const filtered = gameNews.articles.filter((a) => Boolean(a.urlToImage));

const HighlightsBanner = (props: Props) => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-gray-800/80 to-transparent">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {filtered[0].source.name}
          </p>
          <h4 className="text-white font-medium text-large text-left">
            {filtered[0].title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={filtered[0].urlToImage}
        />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-gray-800/80 to-transparent">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {filtered[1].source.name}
          </p>
          <h4 className="text-white font-medium text-large text-left">
            {filtered[1].title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={filtered[1].urlToImage}
        />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-gray-800/80 to-transparent">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {filtered[2].source.name}
          </p>
          <h4 className="text-white font-medium text-large text-left">
            {filtered[2].title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={filtered[8].urlToImage}
        />
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-gray-800/80 to-transparent">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {filtered[3].source.name}
          </p>
          <h4 className="text-white font-medium text-large text-left">
            {filtered[3].title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={filtered[3].urlToImage}
        />
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-gray-800/80 to-transparent">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {filtered[4].source.name}
          </p>
          <h4 className="text-white/90 font-medium text-large text-left">
            {filtered[4].title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={filtered[4].urlToImage}
        />
      </Card>
    </div>
  );
};

export default HighlightsBanner;
