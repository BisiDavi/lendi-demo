import React from "react";
import Select from "./select";
import SelectContent from "@json/select.json";

export default function FilterCharacters() {
  return (
    <div className="flex justify-around items-center w-9/12 m-auto mb-5 p-5 bg-gray-100 rounded flex-col md:flex-row md:justify-between">
      {SelectContent.map((content, index) => (
        <Select data={content} key={index} />
      ))}
    </div>
  );
}
