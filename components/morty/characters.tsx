import { character } from "../../types";
import Character from "./character";

export default function Characters({ characters }: charactersProps) {
  return (
    <div className="characters my-5 grid grid-cols-4 grid-rows-3 px-5">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

interface charactersProps {
  characters: character[];
}
