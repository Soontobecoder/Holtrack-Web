export interface Article {
  id: number;
  title: string;
  shortDesc: string;
  imageDesc: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4?: string;
  image1?: string;
  image2?: string;
  date: string;
  author: string;
  authorDesc: string;
  relation: string;
}

export interface ArticleCard {
  id: number;
  title: string;
  shortDesc: string;
  imageDesc: string;
  date: string;
  author: string;
  relation: string;
}
