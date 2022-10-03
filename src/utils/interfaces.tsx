export type BookCategory =
  | "Computer Science"
  | "Finance"
  | "History"
  | "Science"
  | "Lifestyle"
  | "Sci-fi"
  | "Other";

export interface BookListProps {
  title: string;
  author: string;
  image?: string;
  category: BookCategory;
  rating?: number;
}
