const api = "https://api.themoviedb.org/3/";

export function get(path) {
  return fetch(api + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjU5MTU2ZjIzN2Y4OTU0MzA3NTI4NDY1M2UxODY5OCIsInN1YiI6IjYxM2E0MDg4ZGQ3MzFiMDA2MzE3YjM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m50MP7voMXGeh4VI_hA7t15qNtBSN0r_Z_YGx9cXnkI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
