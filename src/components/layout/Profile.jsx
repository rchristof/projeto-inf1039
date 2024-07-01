import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';





export const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <View style={styles.badgesContainer}>
              <Image source={require('../../assets/images/bdg1.png')} style={styles.badge} />
              <Image source={require('../../assets/images/bdg2.png')} style={styles.badge} />
              <Image source={require('../../assets/images/bdg3.png')} style={styles.badge} />
            </View>
            <Text style={styles.memberSince}>Member since</Text>
            <Text style={styles.memberSinceDate}>04/23/24</Text>
          </View>
          <Image source={require('../../assets/images/profile.png')} style={styles.profilePicture} />
        </View>
        <View style={styles.gamesContainer}>
          <View style={styles.gameCoverContainer}>
            <Image source={require('../../assets/images/shrek.png')} style={styles.gameCover} />
            <Text style={styles.gameTitle}>Midia 1</Text>
          </View>
          <View style={styles.gameCoverContainer}>
            <Image source={require('../../assets/images/shrek.png')} style={styles.gameCover} />
            <Text style={styles.gameTitle}>Midia 2</Text>
          </View>
          <View style={styles.gameCoverContainer}>
            <Image source={require('../../assets/images/shrek.png')} style={styles.gameCover} />
            <Text style={styles.gameTitle}>Midia 3</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Username</Text>
            <Text style={styles.infoText}>User</Text>
            <TouchableOpacity>
              <Text style={styles.changeLink}>(Change username)</Text>
            </TouchableOpacity>
            <Text style={styles.infoLabel}>E-mail</Text>
            <Text style={styles.infoText}>User@example.com</Text>
            <TouchableOpacity>
              <Text style={styles.changeLink}>(Change e-mail)</Text>
            </TouchableOpacity>
            <Text style={styles.infoLabel}>Password</Text>
            <Text style={styles.infoText}>********</Text>
            <TouchableOpacity>
              <Text style={styles.changeLink}>(Change password)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonBorder}>
              <Ionicons name="return-down-back" size={28} color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonBorder}>
              <Ionicons name="ellipse" size={28} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonBorder}>
              <Ionicons name="pencil" size={28} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonBorder}>
              <Ionicons name="settings" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  profileBox: {
    borderWidth: 1,
    borderColor: '#89ffe7',
    borderRadius: 20, 
    padding: 16,
    width: '100%',
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  profileInfo: {
    flex: 1,
  },
  badgesContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  badge: {
    width: 30,
    height: 30,
    marginRight: 4,
  },
  memberSince: {
    color: '#fff',
    fontSize: 16,
  },
  memberSinceDate: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 2,
  },
  gamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    width: '100%',
  },
  gameCoverContainer: {
    alignItems: 'center',
    width: '30%',
  },
  gameCover: {
    width: '100%',
    height: 150,
  },
  gameTitle: {
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 20, 
    padding: 12,
    width: '100%',
    backgroundColor: '#2f2f2f',
    alignItems: 'center',
    marginVertical: 16,
  },
  infoContainer: {
    width: '100%',
  },
  infoLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 2,
  },
  changeLink: {
    color: '#89ffe7',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    width: '100%',
  },
  button: {
    padding: 5,
  },
  buttonBorder: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#3f3f3f',
  },
});

export default Profile;
