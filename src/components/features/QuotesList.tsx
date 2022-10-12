import { quotes } from "../../utils/data/quotes";
import { ScrollList } from "../theme/ScrollList";

const QuoteListItems = quotes;

export const QuotesList = () => {
  return (
    <ScrollList title={"Favourite Quotes"}>
      {QuoteListItems.map((item, index) => {
        return (
          <div
            key={index}
            className={
              "text-sm p-3 border-2 border-white min-w-2xs max-w-2xs overflow-hidden rounded-xl leading-7"
            }
          >
            {item}
          </div>
        );
      })}
    </ScrollList>
  );
};
