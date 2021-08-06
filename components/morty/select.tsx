import { Formik } from "formik";

export default function Select({ data }: SelectProps) {
  return (
    <div className="select my-3">
      <label htmlFor={data.title} className="m-3">
        {data.title}
      </label>
      <select className="p-3 bg-white w-32" id={data.title}>
        {data.content.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

interface SelectProps {
  data: {
    title: string;
    content: string[];
  };
}
