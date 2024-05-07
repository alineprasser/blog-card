import ArrowRight from "../icons/ArrowRight";

function Card({ title, description, image_src, image_alt, label }) {
  return (
    <div className="card-wrapper">
      <figure>
        <img
          src={image_src}
          alt={image_alt}
        />
      </figure>
      <div className="card-content">
        <div className="card-chips">{label}</div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <button
        type="button"
        className="card-action">
        Read more
        <ArrowRight />
      </button>
    </div>
  );
}

export default Card;
