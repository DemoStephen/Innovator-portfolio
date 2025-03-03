import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Link to={"/"}>
        <p>error 404 not found</p>
      </Link>
    </>
  );
}
