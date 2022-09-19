import './styles/App.css';
import heroPattern from './images/hero-pattern.png';
import locationIcon from './images/location-icon.png';
import calendarIcon from './images/calendar-icon.png';
import facebookIcon from './images/facebook-icon.png';
import instagramIcon from './images/instagram-icon.png';
import twitterIcon from './images/twitter-icon.png';

import SpeakerCard from './components/speaker-card';
import FaqWidget from './components/faq-widget';

function App() {
  const faq = [
    {
      question: 'How much does the ticket cost?',
      answer: 'It is absolutely free.',
    },
    {
      question: 'How do I attend the event virtually?',
      answer:
        'After registration, a streaming link will be sent to you, so keep an eye on your inbox.',
    },
    {
      question: 'Will I be granted entry without a ticket?',
      answer: 'No, registration is free but mandatory',
    },
    {
      question: 'Do I have to print out my ticket?',
      answer: 'No, you can simply show your e-ticket with your mobile phone',
    },
    {
      question: 'What is the dress code for the event?',
      answer: 'The dress code for the event is business casual',
    },
    {
      question: 'Are there any age restrictions for registration?',
      answer: 'Yes, must be at least 16',
    },
    {
      question: 'My question has not been answered, who should I contact?',
      answer: 'Please send an email to events@ngmplatform.com',
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <img src="" alt="NGM Logo" />
      </header>
      <div className="hero">
        <section className="hero-content">
          <h1>NGM Conference</h1>
          <fieldset>
            <legend>THEME:</legend>
            <h2>PILOT</h2>
            <p>Promoting Innovative Leaders of Tomorrow</p>
          </fieldset>

          <h3>Time Countdown</h3>

          <nav>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Save your seat
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Download event agenda
            </a>
          </nav>
        </section>
        <div className="hero-pattern">
          {/* <img src={heroPattern} alt="Abstract design" /> */}
        </div>
      </div>
      <section className="section-pilot">
        <h2>Why PILOT?</h2>
        <p>
          <span className="bolden">Nasir Giwa Mentorship</span> is focused on
          creating the next generation of top tier leaders, entrepreneurs and
          business executives. This conference intends to create the breeding
          ground to provide access to a network of people who have set the path,
          or are trying to find the path. A network that participants can
          leverage during and after the event.
        </p>
      </section>
      <section className="section-speakers">
        <h2>Speakers and Guests</h2>

        <SpeakerCard
          altText="Dr Akintoye Akindele"
          name="Dr Akintoye Akindele"
          jobTitle="Chairman, Platform Capital"
          role="Keynote Speaker"
          width={500}
        />

        <SpeakerCard
          altText="Mr Paul Onwuanibe"
          name="Mr Paul Onwuanibe"
          jobTitle="CEO, Landmark Group"
        />
      </section>
      <section className="section-ready">
        <h2>Are you ready?</h2>
        <div>
          <p>
            <span className="icon">
              <img src={locationIcon} alt="Location Icon" />
            </span>
            <span>Lagos, Nigeria</span>
          </p>
          <p>
            <span className="icon">
              <img src={calendarIcon} alt="Calendar Icon" />
            </span>
            <span>October 15, 2022 | 9 am</span>
          </p>
          <p>
            <span>Add to your calendar &gt;</span>
          </p>
        </div>
      </section>

      <section className="section-sponsors">
        <h2>PARTNERS AND SPONSORS</h2>
        <p>
          Want to sponsor the event? Please contact us at events.ngmplatform.com
        </p>
      </section>

      <section className="section-faq">
        <h2>FAQ</h2>

        <FaqWidget
          question="How much does the ticket cost?"
          answer="It is absolutely free."
        />

        <FaqWidget
          question="How do I attend the event virtually?"
          answer="After registration, a streaming link will be sent to you, so keep an eye on your inbox."
        />

        <FaqWidget
          question="Will I be granted entry without a ticket?"
          answer="No, registration is free but mandatory"
        />
      </section>

      <footer className="footer">
        <h2>GET IN TOUCH</h2>
        <address>
          <a href="tel:+2348100579094">(234) 810 057 9094</a>
          <a href="tel:+2349126937936">(234) 912 693 7936</a>
          <a href="mailto:events@ngmplatform.com">events@ngmplatform.com</a>
        </address>
        <ul className="social-links">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
