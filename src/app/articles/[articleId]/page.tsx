import { Header } from "../components/Header";
import Datas from "@/app/shared/articles.json";
import { Article } from "../lib/types";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Avatar } from "../components/Avatar";
import { Points } from "../components/Points";
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

            <div className="flex flex-col md:mx-[10%] xl:mx-[20%] gap-10 p-10">
              <div className="self-center">
                <h1>
                  {" "}
                  <span className="font-bold">By {article.author},</span>{" "}
                  {article.relation}
                </h1>
                <h1>Published {article.date}</h1>
              </div>

              {article.image1 && (
                <div className="border-t-4 self-center pt-5">
                  <Image
                    src={article.image1}
                    alt="Article Image"
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className={article.image1 ? "" : "border-t-4 w-full pt-5"}>
                <p className="text-xl font-bold">{article.heading1}</p>
              </div>

              <div>
                <p>{article.paragraph1}</p>
              </div>

              <div>
                <p className="text-xl font-bold">{article.heading2}</p>
              </div>

              <div>
                <p>{article.paragraph2}</p>
              </div>

              {article.image2 && (
                <div className="border-t-4 self-center pt-5">
                  <Image
                    src={article.image2}
                    alt="Article Image"
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div>
                <p className="text-xl font-bold">{article.heading3}</p>
              </div>

              {Array.isArray(article.paragraph3) ? (
                <Points data={article.paragraph3} />
              ) : (
                <div>
                  <p>{article.paragraph3}</p>
                </div>
              )}

              {article.heading4 && (
                <div>
                  <p className="text-xl font-bold">{article.heading4}</p>
                </div>
              )}

              {article.paragraph4 && Array.isArray(article.paragraph4) ? (
                <Points data={article.paragraph4} />
              ) : (
                article.paragraph4 && (
                  <div>
                    <p>{article.paragraph4}</p>
                  </div>
                )
              )}

              {article.heading5 && (
                <div>
                  <p className="text-xl font-bold">{article.heading5}</p>
                </div>
              )}

              {article.paragraph5 && Array.isArray(article.paragraph5) ? (
                <Points data={article.paragraph5} />
              ) : (
                article.paragraph5 && (
                  <div>
                    <p>{article.paragraph5}</p>
                  </div>
                )
              )}

              {article.heading6 && (
                <div>
                  <p className="text-xl font-bold">{article.heading6}</p>
                </div>
              )}

              {article.paragraph6 && Array.isArray(article.paragraph6) ? (
                <Points data={article.paragraph6} />
              ) : (
                article.paragraph6 && (
                  <div>
                    <p>{article.paragraph6}</p>
                  </div>
                )
              )}

              {article.closing && (
                <div>
                  <p>{article.closing}</p>
                </div>
              )}

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
