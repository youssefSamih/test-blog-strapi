interface Image {
  url: string;
  width: number;
  height: number;
  name: string;
}

interface Category {
  name: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  published_at: string;
  image: Image;
  category: Category;
}

export interface MainProps {
  articles: Array<Article>;
}
