import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const DisplayImage = ({
  lang,
  imageUrl,
  originalText,
  englishName,
  description,
  engDescription,
  handleImageClick,
  isClicked,
}) => {
  //const { englishName, description } = translateData[originalText] || {englishName:'' ,description: ''};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    handleImageClick(originalText);
    setShow(true);
  };

  const speakTitle = () => {
    console.log('im triggered');
    const utterance = new SpeechSynthesisUtterance(originalText);
    if (lang === "Spanish") {
      utterance.lang = "es-ES";
    } else if (lang === "French") {
      utterance.lang = "fr-FR";
    } else if (lang === "German") {
      utterance.lang = "de-DE";
    } else if (lang === "Italian") {
      utterance.lang = "it-IT";
    }

    utterance.onstart = () => {
    };
    utterance.onend = () => {
    };
    window.speechSynthesis.speak(utterance);
  };

  const speakSentence = () => {
    const utterance = new SpeechSynthesisUtterance(description);
    if (lang === "Spanish") {
      utterance.lang = "es-ES";
    } else if (lang === "French") {
      utterance.lang = "fr-FR";
    } else if (lang === "German") {
      utterance.lang = "de-DE";
    } else if (lang === "Italian") {
      utterance.lang = "it-IT";
    }
    utterance.onstart = () => {
      // setIsSpeaking(true);
      // setAudioStarted(true);
    };
    utterance.onend = () => {
      // setIsSpeaking(false);
      // setAudioStarted(false);
    };
    window.speechSynthesis.speak(utterance);
  };

  const speakSentenceInEnglish = () => {
    const utterance = new SpeechSynthesisUtterance(engDescription);
    utterance.lang = "en-US";
    utterance.onstart = () => {
      // setIsSpeaking(true);
      // setAudioStarted(true);
    };
    utterance.onend = () => {
      // setIsSpeaking(false);
      // setAudioStarted(false);
    };
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className={`dynamic-image ${isClicked ? 'isclicked' : ''}`} onClick={handleShow} onMouseEnter={speakTitle}>
        <p>{originalText}</p>
        <img className="fixed-size-image" src={imageUrl} alt={originalText} />
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{englishName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {description}{" "}
            <img
              src="/images/speak-icon.webp"
              className="speak-icon"
              alt="speak-icon"
              onClick={speakSentence}
            ></img>
          </p>
          <p>
            <span className="text-primary">In English:</span> {engDescription}{" "}
            <img
              src="/images/speak-icon.webp"
              className="speak-icon"
              alt="speak-icon"
              onClick={speakSentenceInEnglish}
            ></img>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayImage;
