export default function selectionFilter(library = []) {
  return {
    videos: [
      {
        title: "Trailers",
        data: library.filter((item) => item.genre === "trailers"),
      },
      {
        title: "Comedies",
        data: library.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Awesome",
        data: library.filter((item) => item.genre === "children"),
      },
      {
        title: "Motivation",
        data: library.filter((item) => item.genre === "crime"),
      },
      {
        title: "Memes",
        data: library.filter((item) => item.genre === "feel-good"),
      },
    ],
  };
}
// Accepts videos
// Returns object with selected genre array
