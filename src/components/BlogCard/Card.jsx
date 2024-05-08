import ArrowRight from "../../icons/ArrowRight";
import "./CardStyles.scss";

function Card({ title, description, image_src, image_alt, badge }) {
  return (
    <div className="card-wrapper">
      <figure>
        <img
          className="card-image"
          src={image_src}
          alt={image_alt}
        />
      </figure>
      <main className="card-content">
        <header className="card-header">
          {badge && <span className="card-badge">{badge}</span>}
          <h1 className="card-title">{title}</h1>
        </header>
        <section className="card-text">
          <p className="card-description">{description}</p>
          <button
            type="button"
            className="card-action">
            Read more
            <ArrowRight />
          </button>
        </section>
      </main>
    </div>
  );
}

export default Card;
