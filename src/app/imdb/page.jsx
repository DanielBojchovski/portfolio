import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

const API_KEY = process.env.API_KEY;

export default async function Imdb() {

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
