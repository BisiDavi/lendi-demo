import Characters from "@components/morty/characters";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS_QUERY } from "@client/query";

export default function UrlFilter() {
  const { data, loading, error } = useQuery(GET_CHARACTERS_QUERY);

  const characters = data?.characters;

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="url-filter-page w-full">
      <header className="flex justify-between items-center p-5 bg-gray-200">
        <h4 className="text-black text-2xl font-bold">Hello</h4>
        <p className="text-red-600 text-2xl font-bold">Welcome Doug</p>
      </header>
      <div className="content">
        <div className="text-intro p-5 my-5 mx-auto">
          <h1 className="font-bold text-4xl my-3 text-center">
            URL Filter and Sorting{" "}
          </h1>
          <h4 className="text-2xl text-center">
            Using The Rick and Morty API (Graphql)
          </h4>
        </div>
        <Characters characters={characters.results} />
      </div>
      <footer className="bg-black flex justify-center h-44">
        <h5 className="text-center m-auto text-white text-xl font-bold">
          A quick demo of URL sort and filter in Next.js by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
            href="https://github.com/BisiDavi"
          >
            Olubisi David
          </a>
        </h5>
      </footer>
    </div>
  );
}
