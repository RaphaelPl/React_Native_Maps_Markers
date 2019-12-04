import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";


createMarkers() {
  const {vendors} = this.state;
  const vendorsWithLocations = vendorss.filter(m => !!m.location);
  return vendorsWithLocations.map(vendors => {
    const {id, location} = vendors;
    const {name, color} = authData;
    return (
      <Marker.Animated
        key={id}
        identifier={id}
        coordinate={location}
        pinColor={color}
        title={name}
      />
    );
  });
}

createvendors() {
  const {vendors} = this.state;
  return vendors.map(member => {
    const {name, color} = member.authData;
    return (
      <View key={vendor.id} style={styles.vendor}>
        <View style={[styles.avatar, {backgroundColor: color}]}/>
        <Text style={styles.vendorname}>{name}</Text>
      </View>
    );
  });
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 20,
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 400,
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
},
        member: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: 20,
          height: 30,
          marginTop: 10,
        },
        memberName: {
          marginHorizontal: 10,
        },
        avatar: {
          height: 30,
          width: 30,
          borderRadius: 15,
        }
});