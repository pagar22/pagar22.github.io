import { books } from "../../utils/data/books";
import { BookListProps } from "../../utils/interfaces";
import { getEmojiFromRating } from "../../utils/helpers";
import { ScrollList } from "../theme/ScrollList";

const BookListItems: BookListProps[] = books;

export const BookList = () => {
  return (
    <ScrollList title={"Favourite Books"}>
      {BookListItems.map((item) => {
        return (
          <div className="bookitem">
            <img
              className="w-24"
              src={item.image ? item.image : `books/default-book.png`}
              alt={item.title}
            />
            <div className="flex flex-col justify-between">
              <p className="bookitem-title">{item.title.toUpperCase()}</p>
              <p className="bookitem-author">- {item.author}</p>
              <div className="flex flex-row justify-between items-center">
                <p className="flex-1 text-sm">{item.category}</p>
                {/* <p className="flex-1 text-4xl text-center">
                  {getEmojiFromRating(item.rating)}
                </p> */}
              </div>
            </div>
          </div>
        );
      })}
    </ScrollList>
  );
};
