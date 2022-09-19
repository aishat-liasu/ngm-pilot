import '../styles/faq-widget.css';

function FaqWidget({ question = '', answer = '' }) {
  return (
    <details>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

export default FaqWidget;
