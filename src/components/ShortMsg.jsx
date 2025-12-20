import "./shortMsg.css";

function ShortMsg() {
  return (
    <section className="shortMsg" aria-label="Personal philosophy">
      <blockquote className="short-msg__quote">
        <span
          className="short-msg__quote-mark short-msg__quote-mark--opening"
          aria-hidden="true">
          "
        </span>
        <span className="short-msg__text">
          I enjoy the process of solving problems with clean and scalable
          solutions. I have a genuine passion for channeling inspiration into
          networking
        </span>
        <span
          className="short-msg__quote-mark short-msg__quote-mark--closing"
          aria-hidden="true">
          "
        </span>
      </blockquote>
    </section>
  );
}

export default ShortMsg;
