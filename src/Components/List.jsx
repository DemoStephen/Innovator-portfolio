import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function List({ content, handleNav }) {
  return (
    <>
      <Link to={content}>
        <li className="cursor-pointer" onClick={handleNav}>
          {content}
        </li>
      </Link>
    </>
  );
}
