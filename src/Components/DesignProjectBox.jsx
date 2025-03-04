/* eslint-disable react/prop-types */
export default function DesignProjectBox({ imgSrc, title }) {
  return (
    <article>
      <img src={imgSrc} alt={title} />
      <p className="text-2xl">{title}</p>
    </article>
  );
}
