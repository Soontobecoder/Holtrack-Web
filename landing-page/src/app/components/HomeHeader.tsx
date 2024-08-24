import { CSSProperties } from "react";
import RFID from "../assets/RFID_Tag.png";

interface HeaderProps {
  style?: CSSProperties;
  className?: string;
}

export const HomeHeader: React.FC<HeaderProps> = ({ className, style }) => {
  return (
    <div className="absolute bg-cover bg-no-repeat bg-[url('https://cdnblog.picsart.com/2022/02/devs.jpg')] top-20 relative w-full border rounded-lg shadow ">
      <div
        style={{
          padding: "100px",
        }}
        className="bg-black/60 grid grid-cols-6 gap-4"
      >
        <div className="row-start-1 col-start-1 col-span-6 xl:col-span-2 xl:col-start-2">
          <h1 className="text-6xl font-medium leading-tight">
            HOLTRACK FOR THE WIN
          </h1>
        </div>
        <div className="row-start-2 col-start-1 col-span-6 xl:col-span-2 xl:col-start-2">
          <p style={{ fontSize: "24px" }} className=" text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};
