import { character } from "../../types";
import Character from "./character";

export default function Characters({ characters }: charactersProps) {
  return (
    <div className="characters my-5 grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-5">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

interface charactersProps {
  characters: character[];
}
