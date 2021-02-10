export default function selectionFilter(library = []) {
  return {
    videos: [
      {
        title: "trailers",
        data: library.filter((item) => item.genre === "trailers"),
      },
      {
        title: "Comedies",
        data: library.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: library.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: library.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: library.filter((item) => item.genre === "feel-good"),
      },
    ],
  };
}
// Accepts videos
// Returns object with selected genre array
