import { Header } from "../components/Header";
import Datas from "@/app/shared/articles.json";
import { Article } from "../lib/types";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Avatar } from "../components/Avatar";

interface Props {
  params: { articleId: string };
}

const ArticleDetail = ({ params }: Props) => {
  const articleId = Number(params.articleId);

  // console.log(params.articleId, "ini id artikel yang diambil dari url");

  const article: Article | undefined = Datas.find(
    (el: Article) => el.id === articleId
  );
  if (!article) {
    redirect("/404"); // Handle the case where the article is not found
  }

  return (
    <>
      <div className="bg-white text-black">
        {article ? (
          <>
            <Header Title={article.title} />

            {/* <!-- breadcrumb --> */}
            <nav
              className="w-full bg-neutral-300 p-5"
              style={{ paddingLeft: "15%" }}
            >
              <ol className="list-reset text-lg flex">
                <li>
                  <a
                    href="/articles"
                    className="text-warning transition duration-150 ease-in-out hover:text-warning-accent-300 focus:text-warning-accent-300 active:text-warning-accent-300 motion-reduce:transition-none dark:text-warning-400"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <span className="mx-2 text-white">/</span>
                </li>
                <li className="text-white">{article.title}</li>
              </ol>
            </nav>

            <div className="flex flex-col md:mx-[10%] xl:mx-[30%] gap-10 p-10 items-center">
              <div>
                <h1>
                  {" "}
                  <span className="font-bold">By {article.author},</span>{" "}
                  {article.relation}
                </h1>
                <h1>Published {article.date}</h1>
              </div>

              {article.image1 && (
                <div className="border-t-4 pt-5">
                  <Image
                    src={article.image1}
                    alt="Article Image"
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className={article.image1 ? "" : "border-t-4 pt-5"}>
                <p>{article.paragraph1}</p>
              </div>

              <div>
                <p>{article.paragraph2}</p>
              </div>

              <div>
                <p>{article.paragraph3}</p>
              </div>

              <div>
                <Avatar
                  data={{
                    author: article.author,
                    description: article.authorDesc,
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ArticleDetail;
