import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

export default function RemoveButton({ handleDeleteNote, note }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={
          <Button icon>
            <Icon name="delete" />
          </Button>
        }
      >
        <Modal.Content>
          <p>Are you sure you want to delete this?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="brown" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="brown"
            onClick={() => {
              setOpen(false);
              handleDeleteNote(note._id);
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
