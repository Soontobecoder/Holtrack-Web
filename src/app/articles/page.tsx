import { Card } from "./components/ArticleCard";
import { CardHorizontal } from "../components/CardHorizontal";

import Datas from "../shared/articles.json";
import { Header } from "../components/Header";
import PageFooter from "../components/PageFooter";
import Link from "next/link";

const Article: React.FC = () => {
  // console.log(Datas, "ini data.jsonnya");
  return (
    <div className="bg-white text-black ">
      <Header
        Title={
          <>
            <span className="text-warning">Articles</span>
          </>
        }
        Body="To find out more about RFID technologies, our website provides multiple reading materials about what are the advantages of using RFID for your business operations, what it does and why it is the key to unlocking a more efficient future in business operations."
      />

      {/* center card */}
      <CardHorizontal
        cardTitle="Need help?"
        className="drop-shadow-xl"
        style={{ marginTop: "-100px" }}
      />
      <div className="px-[10%] pb-10 pt-10">
        <h1 className="text-3xl w-full border-b-4 font-bold border-black pb-2">
          {" "}
          List of Articles{" "}
        </h1>
        <div className="pt-4 flex flex-col gap-10">
          {Datas.map((el, i) => (
            <Link href={`/articles/${el.id}`} key={i}>
              <Card
                article={{
                  id: Datas[i].id,
                  title: Datas[i].title,
                  shortDesc: Datas[i].shortDesc,
                  imageDesc: Datas[i].imageDesc,
                  date: Datas[i].date,
                  author: Datas[i].author,
                  relation: Datas[i].relation,
                }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Form */}
      <div
        style={{
          backgroundColor: "#EEEEEF",
          paddingTop: "50px",
          paddingBottom: "50px",
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};

export default Article;
