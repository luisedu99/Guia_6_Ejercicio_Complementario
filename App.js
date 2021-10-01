/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalHabSencilla, setModalHabiSenc] = useState(false);
  const [modalHabDoble, setModalHabiDoble] = useState(false);
  const [modalHabTriple, setModalHabiTriple] = useState(false);
  const [modalHabFam, setModalHabiFam] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalHabSencilla} onRequestClose={() => {
          alert("Modal has been closed.");
        }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitaciones Sencillas</Text>
              <Text>
                Ideal para una persona, con capacidad maxima de 2 personas, incluye baño con tina, TV Satelital, Aire acondicionado
              </Text>
              <Image style={styles.ciudad} source={require('./src/img/Hab1.jpg')} />
              <Button title="Cerrar" onPress={() => { setModalHabiSenc(!modalHabSencilla); }} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalHabDoble} onRequestClose={() => {
          alert("Modal has been closed.");
        }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitaciones Dobles</Text>
              <Text>
                Ideal para una persona, con capacidad maxima de 3 personas, incluye baño con tina, TV Satelital, Aire acondicionado
              </Text>
              <Image style={styles.ciudad} source={require('./src/img/Hab2.jpg')} />
              <Button title="Cerrar" onPress={() => { setModalHabiDoble(!modalHabDoble); }} />
            </View>
          </View>
        </Modal>


        <Modal transparent={true} animationType="slide" visible={modalHabTriple} onRequestClose={() => {
          alert("Modal has been closed.");
        }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitaciones Triples</Text>
              <Text>
                Ideal para una persona, con capacidad maxima de 4 personas, incluye baño con tina, TV Satelital, Aire acondicionado
              </Text>
              <Image style={styles.ciudad} source={require('./src/img/Hab3.jpg')} />
              <Button title="Cerrar" onPress={() => { setModalHabiTriple(!modalHabTriple); }} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalHabFam} onRequestClose={() => {
          alert("Modal has been closed.");
        }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitaciones Familiares</Text>
              <Text>
                Ideal para una persona, con capacidad maxima de 5 personas, incluye baño con tina, TV Satelital, Aire acondicionado
              </Text>
              <Image style={styles.ciudad} source={require('./src/img/Hab4.jpg')} />
              <Button title="Cerrar" onPress={() => { setModalHabiFam(!modalHabFam); }} />
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./src/img/H3.jpg')} />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Nuestras habitaciones</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalHabiSenc(!modalHabSencilla) }}>
                <Image style={styles.ciudad} source={require('./src/img/Hab1.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => { setModalHabiDoble(!modalHabDoble) }}>
                <Image style={styles.ciudad} source={require('./src/img/Hab2.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => { setModalHabiTriple(!modalHabTriple) }}>
                <Image style={styles.ciudad} source={require('./src/img/Hab3.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight onPress={() => { setModalHabiFam(!modalHabFam) }}>
                <Image style={styles.ciudad} source={require('./src/img/Hab4.jpg')} />
              </TouchableHighlight>
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Servicios a huespedes</Text>
          <View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/Serv1.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/Serv2.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/Serv3.jpg')} />
            </View>
          </View>

          <Text style={styles.titulo}>Actividades cercas del hotel</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/Sit1.png')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/Sit2.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/Sit3.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/Sit4.jpg')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  Modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});
export default App;
