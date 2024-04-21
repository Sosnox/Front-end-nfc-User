import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner} from "@nextui-org/react";
import { useState } from "react";

export default function PopModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur')

  const handleOpen = (backdrop : string) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
     <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Success</ModalHeader>
              <ModalBody>
                <p>
                    <Spinner label="Success" color="success" labelColor="success"/>
                </p>
              </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
    </>
  );
}
