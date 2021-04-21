import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import NumberedText from '../../common/components/text/NumberedText';
import PlaybackControl from '../control/PlaybackControl';
import MessageControl from '../control/MessageControl';
import PreviewContainer from '../viewers/PreviewContainer';
import styles from './Editor.module.css';
import EventListWrapper from './list/EventListWrapper';
import { useDisclosure } from '@chakra-ui/hooks';
import SettingsModal from '../modals/SettingsModal';
import SettingsIconBtn from '../../common/components/buttons/SettingsIconBtn';

export default function Editor() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SettingsModal isOpen={isOpen} onClose={onClose} />

      <div className={styles.mainContainer}>
        <Box className={styles.editor}>
          <Heading size='lg' style={{ paddingBottom: '0.25em' }}>
            Event List
          </Heading>
          <NumberedText number={1} text={'Manage and select event to run'} />
          <div className={styles.content}>
            <EventListWrapper />
          </div>
        </Box>

        <Box className={styles.preview} borderRadius='0.5em' overflowX='auto'>
          <Heading size='lg' style={{ paddingBottom: '0.25em' }}>
            Preview Displays
          </Heading>
          <NumberedText number={4} text={'Realtime screen preview'} />
          <div className={styles.content}>
            <PreviewContainer />
          </div>
        </Box>

        <Box className={styles.messages}>
          <Heading size='lg' style={{ paddingBottom: '0.25em' }}>
            Display Messages
          </Heading>
          <NumberedText
            number={2}
            text={'Show realtime messages on separate screen types'}
          />
          <div className={styles.content}>
            <MessageControl />
          </div>
        </Box>

        <Box className={styles.playback}>
          <Heading size='lg' style={{ paddingBottom: '0.25em' }}>
            Time Control
          </Heading>
          <NumberedText number={3} text={'Control Timer'} />
          <div className={styles.content}>
            <PlaybackControl />
          </div>
        </Box>

        <Box className={styles.settings}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2em',
              paddingTop: '3em',
            }}
          >
            <SettingsIconBtn size='md' clickHandler={onOpen} />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#3b8cd8',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#3182ce',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#2778c4',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#1d6eba',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#1364b0',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#095aa6',
                borderRadius: '50%',
              }}
            />
          </div>
        </Box>
      </div>
    </>
  );
}