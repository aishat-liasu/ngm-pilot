import '../styles/speaker-card.css';

function SpeakerCard({
  imageSrc = '',
  altText = '',
  width = 340,
  name,
  jobTitle,
  role = '',
}) {
  return (
    <section className="speaker-card" style={{ width: `${width}px` }}>
      <img src={imageSrc} alt={altText} />
      <article>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        {role && <p>{role}</p>}
      </article>
    </section>
  );
}

export default SpeakerCard;
