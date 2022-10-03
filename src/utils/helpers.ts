export const getEmojiFromRating = (rating?: number) => {
  if (rating === undefined) return "🤓";
  else {
    if (rating >= 0 && rating <= 50) return "🤕";
    else if (rating > 50 && rating <= 70) return "😐";
    else if (rating > 70 && rating < 90) return "😊";
    else return "🤩";
  }
};
