import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function PepModal({imagePath, name, title, office, phone, interestArea}) {
    //create state 'open' to handle opening and closing of the modal
    const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show More</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
      <img src={imagePath}/>
        <Modal.Description style={{paddingLeft: '30px'}}>
          <h3>{title}</h3>
          <p>Office: {office}</p>
          <p>Phone: {phone}</p>
          <p>Areas of interest: {interestArea}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
export default PepModal;