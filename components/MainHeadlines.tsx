import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import NextLink from "next/link";
import { data } from "./../dev-data/topHeadlines";
import MainCard from "./MainCard";
import MediumCard from "./MediumCard";
import MediumImgCard from "./MediumImgCard";
import { RightArrowIcon } from "./icons";
import { data as techNews } from "./../dev-data/techNews";
import { data as entertainmentNews } from "./../dev-data/entertainmentNews";

const articles = data.articles;

const MainHeadlines = () => {
  data;
  return (
    <div className="w-full grid grid-cols-12 gap-x-5 gap-y-28">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            <h4 className="font-semibold uppercase text-xl">
              {"Entertainment"}
            </h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              // href={siteConfig.links.sponsor}
              href={"#"}
              variant="flat"
            >
              <RightArrowIcon className="text-normal w-5" />
            </Button>
          </div>

          <small className="text-default-500">
            {"See what's happening in the entertainment world."}
          </small>
        </header>

        <MainCard article={entertainmentNews.articles[1]} />
        {/* <Divider className="my-4 w-[80%] mx-auto" /> */}
        <MainCard article={entertainmentNews.articles[4]} />
        {/* <Divider className="my-4 w-[80%] mx-auto" /> */}
        <MainCard article={entertainmentNews.articles[15]} />
        {/* <Divider className="my-4 w-[80%] mx-auto" /> */}
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            <h4 className="font-semibold uppercase text-xl">{"Latest News"}</h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              // href={siteConfig.links.sponsor}
              href={"#"}
              variant="flat"
            >
              <RightArrowIcon className="w-5" />
            </Button>
          </div>

          <small className="text-default-500">
            {"Bringing you the Latest Headlines from around the world."}
          </small>
        </header>

        <div className="grid grid-cols-4 gap-5">
          {articles.slice(1, 7).map((article, i) => (
            <div
              key={i}
              className="col-span-4 md:col-span-4 justify-self-center"
            >
              <MediumCard article={article} />
              {/* <Divider className="my-4 w-[80%] mx-auto" /> */}
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 space-y-5">
        <header className="mx-4 space-y-2">
          <div className="flex items-center gap-5">
            {/* <h4 className="font-semibold uppercase text-xl">{"Most Read"}</h4> */}
            <h4 className="font-semibold uppercase text-xl">{"Technology"}</h4>
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              className="text-sm font-normal text-default-600 bg-default-100"
              // href={siteConfig.links.sponsor}
              href={"#"}
              variant="flat"
            >
              <RightArrowIcon className="text-normal w-5" />
            </Button>
          </div>

          <small className="text-default-500">
            {/* {"Where the World's Most Read Stories unfold."} */}
            {"Exploring the horizons of Technology, Innovations and Trends."}
          </small>
        </header>

        <div className="grid grid-cols-4 gap-x-3 gap-y-5">
          {techNews.articles.slice(3, 13).map((article, i) => (
            <div
              key={i}
              className="col-span-4 md:col-span-2 lg:col-span-4 justify-self-center"
            >
              <MediumImgCard article={article} />
              {/* <Divider className="my-4 w-[80%] mx-auto" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHeadlines;

{
  /* <div className="bg-green-400 col-span-12 lg:col-span-4 flex flex-wrap lg:flex-col justify-start gap-3"></div> */
}
