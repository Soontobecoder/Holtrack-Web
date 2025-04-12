import { ArticleCard } from "../lib/types";

interface Prop {
  article: ArticleCard;
}

export const Card: React.FC<Prop> = ({ article }) => {
  console.log(article, "ini articlenya");
  return (
    <div className="flex border-b-2 pb-8 border-[rgb(227,227,227)] justify-between w-full">
      <div id="left-side" className="w-3/4">
        <p className="font-light">{article.date}</p>
        <p className="pt-4 text-xl font-medium">{article.title}</p>
        <p className="pt-4">{article.shortDesc}</p>
        <p className="pt-4 text-sm">
          by <span className="font-bold">{article.author}, </span>{" "}
          {article.relation}
        </p>
      </div>
      <div id="right-side" className="w-1/4 flex justify-end">
        <img
          className="h-full w-auto"
          alt={article.title}
          src={article.imageDesc}
        />
      </div>
    </div>
  );
};
