import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function List({ content }) {
  return (
    <>
      <Link to={content}>
        <li className="cursor-pointer">{content}</li>
      </Link>
    </>
  );
}
