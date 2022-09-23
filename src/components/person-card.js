import '../styles/person-card.css';

function PersonCard({
  imageSrc = '',
  altText = '',
  width = 340,
  name,
  jobTitle,
  role = '',
}) {
  return (
    <li className="person-card" style={{ width: `${width}px` }}>
      <img src={imageSrc} alt={altText} />
      <article>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        {role && <p>{role}</p>}
      </article>
    </li>
  );
}

export default PersonCard;
