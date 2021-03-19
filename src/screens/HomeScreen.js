import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>First App 12</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to components!"
      />
      <Button 
      onPress={() => props.navigation.navigate("List")}
      title="Go to list!"
      />
      <Button 
      onPress={() => props.navigation.navigate("Image")}
      title="Go to image!"
      />
      <Button 
      onPress={() => props.navigation.navigate("Counter")}
      title="Go to counter!"
      />
      <Button 
      onPress={() => props.navigation.navigate("Color")}
      title="Go to color!"
      />
      <Button 
      onPress={() => props.navigation.navigate("Square")}
      title="Go to square!"
      />
      <Button 
      onPress={() => props.navigation.navigate("Box")}
      title="Go to box!"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
