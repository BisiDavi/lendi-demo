import Characters from "@components/morty/characters";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS_QUERY } from "@client/query";
import AppLoader from "@components/app-loader";
import FilterCharacters from "@components/morty/filter-characters";

export default function UrlFilter() {
  const { data, loading, error } = useQuery(GET_CHARACTERS_QUERY);

  const characters = data?.characters;

  return (
    <div className="url-filter-page w-full">
      <header className="flex justify-between items-center p-5 bg-gray-200">
        <h4 className="text-black lg:text-2xl md:text-lg font-bold">
          Rick & Morty API
        </h4>
        <p className="text-red-600 md:text-lg lg:text-2xl font-bold">
          Hello Doug
        </p>
      </header>
      <div className="content">
        <div className="text-intro p-5 my-5 mx-auto">
          <h1 className="font-bold md:text-xl lg:text-4xl my-3 text-center ">
            URL Filter & Sorting{" "}
          </h1>
          <h4 className="lg:text-2xl md:text-lg text-center">
            Using The Rick and Morty API (Graphql)
          </h4>
        </div>
        <FilterCharacters />
        {loading ? (
          <AppLoader />
        ) : (
          <Characters characters={characters.results} />
        )}
        {error && (
          <div className="flex flex-row">
            <h3 className="text-lg text-red">Oops, An error just occured</h3>
            <p className="text-red">{error.message}</p>
          </div>
        )}
      </div>
      <footer className="bg-gray-400 flex justify-center h-44">
        <h5 className="text-center m-auto text-white mx-5 lg:text-xl sm:text-sm font-bold">
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
