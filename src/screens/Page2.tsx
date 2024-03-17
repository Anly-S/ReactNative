import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

function ModalTester() {
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seekButton} onPress={toggleModal1}>
        <Text style={styles.seekText}>FADE IN!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.seekButton} onPress={toggleModal2}>
        <Text style={styles.seekText}>BOTTOM SHEET</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.seekButton} onPress={toggleModal3}>
        <Text style={styles.seekText}>ROTATE!!</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible1}
        animationIn="fadeInLeft"
        animationOut="fadeOutRight">
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Hello!</Text>
          <TouchableOpacity style={styles.hideButton} onPress={toggleModal1}>
            <Text style={styles.hideText}>FADE OUT🙈</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        style={styles.sheetModal}
        isVisible={isModalVisible2}
        hasBackdrop={true}
        backdropColor="black"
        animationIn="slideInUp"
        onSwipeComplete={() => setModalVisible2(false)}
        swipeDirection="down"
        backdropOpacity={0.7}>
        <View style={styles.modalSheet}>
          <Text style={styles.modalText}>Hi there! 🎉🎉✨</Text>
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible3}
        animationIn="rotate"
        animationInTiming={500}
        animationOut="bounceOutDown"
        animationOutTiming={500}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Bye!</Text>
          <TouchableOpacity style={styles.hideButton} onPress={toggleModal3}>
            <Text style={styles.hideText}>BOUNCE DOWN!⚽⚽</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  sheetModal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
  },
  seekButton: {
    backgroundColor: '#0f996f',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  seekText: {
    fontSize: 18,
    color: '#fff',
  },
  hideButton: {
    // position: 'absolute',
    backgroundColor: '#0f996f',
    padding: 8,
    top: 20,
    right: 20,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginLeft: 40,
  },
  hideText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalSheet: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    height: '80%',
  },
  modalText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
});

export default ModalTester;
