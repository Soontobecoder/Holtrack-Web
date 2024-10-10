import { ReactNode } from "react";

interface HeaderProps {
  Title: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ Title }) => {
  return (
    <div className="pt-[100px] flex items-center h-[400px] xl:h-[350px] bg-[url(https://www.cmc.ca/wp-content/uploads/2019/07/cad-header-background-2.jpg)]">
      <div className="mx-10 xl:mx-0 flex-grow xl:grid xl:grid-cols-8 gap-6">
        <div className="col-start-2 col-span-3">
          <h2 className="text-white text-4xl font-semibold">{Title}</h2>
        </div>
      </div>
    </div>
  );
};
