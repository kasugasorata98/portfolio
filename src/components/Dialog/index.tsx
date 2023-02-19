import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const Dialog: React.FC<{
  title: string;
  confirmTitle: string;
  cancelTitle: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}> = ({ title, confirmTitle, cancelTitle, onConfirm, onCancel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>(null);
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="medium">{title}</AlertDialogHeader>
            <AlertDialogFooter>
              {onCancel && (
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onClose();
                    onCancel();
                  }}
                >
                  {cancelTitle}
                </Button>
              )}
              {onConfirm && (
                <Button
                  colorScheme="green"
                  ref={cancelRef}
                  onClick={() => {
                    onClose();
                    onConfirm();
                  }}
                  ml={3}
                >
                  {confirmTitle}
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default Dialog;
