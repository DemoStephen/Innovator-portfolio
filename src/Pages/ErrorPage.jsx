import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <p className="text-center">
        error 404 not found click{" "}
        <Link to="/" className="text-blue-900 underline">
          here
        </Link>{" "}
        to go back home
      </p>
    </>
  );
}
