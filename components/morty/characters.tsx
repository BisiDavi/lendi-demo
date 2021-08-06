import { character } from "../../types";
import Character from "./character";

export default function Characters({ characters }: charactersProps) {
  return (
    <div className="characters lg:my-5 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 lg:px-5">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

interface charactersProps {
  characters: character[];
}
