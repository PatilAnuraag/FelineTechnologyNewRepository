import { Button, Modal } from 'react-bootstrap';


export default function AudioModal(props) {
    return (
    <Modal show={props.isopen}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">
        Close
      </Button>
     </Modal.Footer>
  </Modal>  
    
    
    
    
    );
  
  
  
  
  }