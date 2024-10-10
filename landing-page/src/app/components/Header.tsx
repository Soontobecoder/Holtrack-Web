import { ReactNode } from "react";

interface HeaderProps {
  Title: ReactNode;
  Body: string;
}

export const Header: React.FC<HeaderProps> = ({ Title, Body }) => {
  return (
    <div
      style={{
        clipPath:
          "polygon(100% 0%, 0% 0% , 0.00% 80.00%, 2.00% 79.91%, 4.00% 79.65%, 6.00% 79.22%, 8.00% 78.64%, 10.00% 77.94%, 12.00% 77.13%, 14.00% 76.24%, 16.00% 75.31%, 18.00% 74.37%, 20.00% 73.45%, 22.00% 72.59%, 24.00% 71.81%, 26.00% 71.15%, 28.00% 70.62%, 30.00% 70.24%, 32.00% 70.04%, 34.00% 70.01%, 36.00% 70.16%, 38.00% 70.48%, 40.00% 70.95%, 42.00% 71.58%, 44.00% 72.32%, 46.00% 73.16%, 48.00% 74.06%, 50.00% 75.00%, 52.00% 75.94%, 54.00% 76.84%, 56.00% 77.68%, 58.00% 78.42%, 60.00% 79.05%, 62.00% 79.52%, 64.00% 79.84%, 66.00% 79.99%, 68.00% 79.96%, 70.00% 79.76%, 72.00% 79.38%, 74.00% 78.85%, 76.00% 78.19%, 78.00% 77.41%, 80.00% 76.55%, 82.00% 75.63%, 84.00% 74.69%, 86.00% 73.76%, 88.00% 72.87%, 90.00% 72.06%, 92.00% 71.36%, 94.00% 70.78%, 96.00% 70.35%, 98.00% 70.09%, 100.00% 70.00%)",
        zIndex: "10",
      }}
      className="relative top-20 h-[680px] xl:h-[600px] overflow-hidden rounded-lg bg-[url('https://media.istockphoto.com/id/1347197740/photo/business-people-having-casual-discussion-during-meeting.jpg?s=612x612&w=0&k=20&c=HSnFzyuwUDZFCehBv0W0jjRfwY1eKjGV1Lkek8lXY2Q=')] bg-cover bg-no-repeat text-white"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-black/60 bg-fixed">
        <div
          style={{ marginTop: "150px" }}
          className="text-white grid grid-cols-8 gap-4"
        >
          <div className="col-start-2 col-span-6 xl:col-start-2 xl:col-span-3">
            <h2 className="text-4xl font-semibold">{Title}</h2>
          </div>
          <div className="row-start-2 col-start-2 xl:col-start-2 col-span-6 xl:col-span-3">
            <h4 className="text-xl text-justify">{Body}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
