import { useCallback, useRef } from 'react';
import { IoTrash } from 'react-icons/io5';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { useEventAction } from '../../../common/hooks/useEventAction';
import { useAppMode } from '../../../common/stores/appModeStore';
import { useEventSelection } from '../useEventSelection';

export default function RundownMenu() {
  const clearSelectedEvents = useEventSelection((state) => state.clearSelectedEvents);
  const appMode = useAppMode((state) => state.mode);
  const { deleteAllEvents } = useEventAction();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const deleteAll = useCallback(() => {
    deleteAllEvents();
    clearSelectedEvents();
    onClose();
  }, [clearSelectedEvents, deleteAllEvents, onClose]);

  return (
    <>
      <Button
        size='sm'
        variant='ontime-outlined'
        leftIcon={<IoTrash />}
        onClick={onOpen}
        color='#FA5656'
        isDisabled={appMode === 'run'}
      >
        Clear rundown
      </Button>
      <AlertDialog variant='ontime' isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Clear rundown
            </AlertDialogHeader>
            <AlertDialogBody>
              You will lose all data in your rundown. <br /> Are you sure?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} variant='ontime-ghosted-white'>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={deleteAll} ml={4}>
                Delete all
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
