"use client";
import useZoomStore from "@/store/zoom";
import { Portal, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { Frame } from "./Frame";

export const Zoom = () => {
  const { src, close } = useZoomStore();

  return (
    src !== "" && (
      <Portal>
        <Modal isOpen={!!src} onClose={close} isCentered>
          <ModalOverlay />
          <ModalContent maxW="384px" width="fit-content">
            <Frame src={src} />
          </ModalContent>
        </Modal>
      </Portal>
    )
  );
};
