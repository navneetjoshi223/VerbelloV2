import React,{useState} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

const translateData = {
  'Nombre en español 1': { englishName: 'Name in English 1', description: 'Description in English 1' },
  'Nombre en español 2': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 3': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 4': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 5': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 6': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 7': { englishName: 'Name in English 2', description: 'Description in English 2' },
  'Nombre en español 8': { englishName: 'Name in English 2', description: 'Description in English 2' },
};

const DisplayImage = ({ imageUrl, spanishName, handleImageClick, isClicked }) => {
  const { englishName, description } = translateData[spanishName] || {englishName:'' ,description: ''};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    handleImageClick(spanishName);
    setShow(true);
  }

  return (
    <>
      <div className="dynamic-image" onClick={handleShow}>
        <img className="fixed-size-image" src={imageUrl} alt={spanishName} />
        {/* <p>{spanishName}</p> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{englishName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayImage;


