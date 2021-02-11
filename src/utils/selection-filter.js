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
        data: library.filter((item) => item.genre === "awesome"),
      },
      {
        title: "Motivation",
        data: library.filter((item) => item.genre === "motivation"),
      },
      {
        title: "Memes",
        data: library.filter((item) => item.genre === "memes"),
      },
    ],
  };
}
// Accepts videos
// Returns object with selected genre array
