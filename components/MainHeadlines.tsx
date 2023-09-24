import { data } from "./../dev-data/topHeadlines";
import MainCard from "./MainCard";
import MediumCard from "./MediumCard";
import MediumImgCard from "./MediumImgCard";

const articles = data.articles;

const MainHeadlines = () => {
  return (
    <div className="w-full flex flex-col justify-center md:flex-row gap-6 md:flex-wrap">
      <div className="space-y-4">
        <h4 className="font-bold text-3xl">{"Hot today"}</h4>
        <MainCard article={articles[3]} />
        <MainCard article={articles[4]} />
      </div>
      <div className="flex flex-col justify-start gap-3">
        <h4 className="font-bold text-3xl">{"Latest news"}</h4>
        {articles.slice(0, 5).map((article, i) => (
          <MediumCard key={i} article={article} />
        ))}
      </div>
      <div className="flex flex-col justify-start gap-3">
        <h4 className="font-bold text-3xl">{"Most read"}</h4>
        {articles.slice(5, 12).map((article, i) => (
          <MediumImgCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MainHeadlines;
