import Contentloader from "react-content-loader";

function Loader() {
  return (
    <Contentloader
      speed={2}
      className="rounded-lg character card rounded-lg lg:items-center bg-gray-100 flex m-2 lg:flex-row flex-col lg:flex-row"
      style={{ width: "90%" }}
      backgroundColor={"lightgray"}
      foregroundColor={"#999"}
    >
      <rect x="0" height="150" width="100%" />
    </Contentloader>
  );
}

export default function AppLoader() {
  const contentsExpected = Array(20);
  return (
    <div className="apploader lg:my-5 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 lg:px-5">
      {contentsExpected.fill(20).map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
}
