import React, { useState } from "react";
import { Link } from "react-router-dom";
export interface SearchBoxProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  const [value, setValue] = useState(props.value);

  return (
    <div className="relative">
      <Link to="/Search">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <input
          id="search"
          name="search"
          className="block w-64 pl-10 pr-3 py-2 rounded-md border border-none leading-5 bg-gray-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-none focus:ring-none focus:border-none sm:text-sm text-gray-400"
          placeholder="Search a movie"
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event: any) => {
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              props.onChange && props?.onChange(event.target.value);
            }
          }}
        />
      </Link>
    </div>
  );
};
