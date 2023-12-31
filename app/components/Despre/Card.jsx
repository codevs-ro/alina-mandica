import { useState } from "react";
function Card(props) {
  const [detail, setDetail] = useState(false);

  return (
    <div className={"w-full   md:w-5/12 mx-auto rounded-md bg-teal-500/30"}>
      <div
        className={
          detail
            ? "py-2 px-6 flex items-center rounded-t-md border-x-2 border-t-2   border-teal-950 justify-between bg-teal-500"
            : "py-2 px-6 flex items-center rounded-md justify-between bg-teal-500 "
        }
      >
        <h3 className="title text-teal-50 text-xl">{props.titlu}</h3>{" "}
        {!detail && (
          <svg
            onClick={() => {
              setDetail(!detail);
            }}
            className="w-5 h-5 cursor-pointer text-gray-800 dark:text-teal-50 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 14"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
            </g>
          </svg>
        )}
        {detail && (
          <svg
            onClick={() => {
              setDetail(!detail);
            }}
            className="w-5 h-5 cursor-pointer text-gray-800 dark:text-teal-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </div>
      {detail && (
        <p className="p-4 rounded-b-md border-b-2 border-x-2 border-teal-950">
          {props.descriere}
        </p>
      )}
    </div>
  );
}
export default Card;
