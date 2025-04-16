export interface Article {
  id: number;
  title: string;
  shortDesc: string;
  imageDesc: string;
  heading1: string;
  paragraph1: Array<string> | string;
  heading2: string;
  paragraph2: Array<string> | string;
  heading3: string;
  paragraph3: Array<string> | string;
  heading4?: string;
  paragraph4?: Array<string> | string;
  heading5?: string;
  paragraph5?: Array<string> | string;
  heading6?: string;
  paragraph6?: Array<string> | string;
  closing?: string;
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
