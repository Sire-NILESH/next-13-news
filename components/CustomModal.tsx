import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface Props {
  onOpenChange: () => void;
  isOpen: boolean;
  message?: string;
  description?: string;
  actionFn: () => void;
}

const CustomModal = ({
  isOpen,
  onOpenChange,
  message,
  description,
  actionFn,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      onClose={actionFn}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{message}</ModalHeader>
            <ModalBody>
              <p>{description}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Okay, I understand
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
