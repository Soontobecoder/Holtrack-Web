import { Figure } from "./Figure";
import "../home.css";

interface ScrollerProps {
  dataAnimated: string;
}

const imageList = [
  {
    caption: "Image 1",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/041.webp",
  },
  {
    caption: "Image 2",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/042.jpg",
  },
  {
    caption: "Image 3",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/043.webp",
  },
  {
    caption: "Image 4",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/044.webp",
  },
  {
    caption: "Image 5",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/045.webp",
  },
  {
    caption: "Image 6",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/046.webp",
  },
  {
    caption: "Image 7",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/047.webp",
  },
  {
    caption: "Image 8",
    image: "https://tecdn.b-cdn.net/img/new/standard/city/048.webp",
  },
];

export const ScrollerList: React.FC<ScrollerProps> = ({ dataAnimated }) => {
  return (
    <div data-animated={dataAnimated} className="scroller">
      <ul className="tag-list scroller__inner">
        {imageList.map((item, index) => (
          <li key={index}>
            <Figure caption={item.caption} image={item.image} />
          </li>
        ))}

        {/* Duplicate the list for smooth scrolling */}
        {imageList.map((item, index) => (
          <li key={index}>
            <Figure caption={item.caption} image={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
