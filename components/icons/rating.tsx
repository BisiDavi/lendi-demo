export default function displayRating(rate: number) {
  const arrays = new Array(rate);
  const arrayContent = arrays.fill(rate);
  return (
    <span className="my-2 flex items-center">
      {arrayContent.map((_, index) => (
        <Star key={index} />
      ))}
    </span>
  );
}

export function Star() {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 33"
      version="1.1"
      className="mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Path</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-302.000000, -277.000000)"
          fill="#FFBF00"
          fillRule="nonzero"
        >
          <g transform="translate(150.000000, 236.000000)">
            <g transform="translate(0.000000, 1.000000)">
              <g transform="translate(32.000000, 40.512821)">
                <g transform="translate(120.000000, 0.000000)">
                  <polygon points="32 12.1538462 22 19.5811966 26 32.4102564 16 24.3076923 6 32.4102564 10 19.5811966 0 12.1538462 12 12.1538462 16 0 20 12.1538462"></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
