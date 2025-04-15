import { ReactNode } from "react";

interface HeaderProps {
  Title: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ Title }) => {
  return (
    <div className="relative pt-[100px] flex items-center h-[400px] xl:h-[350px] bg-[url('https://static.vecteezy.com/system/resources/previews/024/140/724/non_2x/abstract-background-illustration-orange-background-illustration-abstract-yellow-background-for-wallpaper-display-landing-page-banner-or-layout-simple-design-graphic-for-display-free-vector.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative mx-10 xl:mx-0 flex-grow xl:grid xl:grid-cols-8 gap-6">
        <div className="col-start-2 col-span-3">
          <h2 className="text-white text-4xl font-semibold">{Title}</h2>
        </div>
      </div>
    </div>
  );
};
