import { useState } from 'react';
import '../styles/person-popup.css';

import closeIcon from '../images/close-icon.png';

function PersonPopup({
  imageSrc = '',
  altText = '',
  name,
  popupControl,
  jobTitle,
}) {
  const [popupState, setPopupState] = useState(false);

  const closeStyle = {
    display: 'block',
  };

  function closePopup() {
    setPopupState(true);
    popupControl(false);
  }

  return (
    <div className="person-popup" style={!popupState ? closeStyle : {}}>
      <article className="person-content">
        <button className="close-btn" onClick={closePopup}>
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <div className="person-profile">
          <img src={imageSrc} alt={altText} />
          <h3>{name}</h3>
          <h4>{jobTitle}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
          elementum sem pulvinar tempus ipsum, amet, diam. Rutrum ultricies sed
          et risus condimentum parturient.
        </p>
      </article>
    </div>
  );
}

export default PersonPopup;
