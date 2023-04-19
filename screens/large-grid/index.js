import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const LargeGrid = () => {
  const navigation = useNavigation();
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Login");
      }}><View style={styles.row}>
          <View style={styles.col}>
            {
              /* YOUR CODE HERE */
            }
          <Text style={styles.cALTSMHe}>Login</Text></View>
          <View style={styles.col}>
            {
              /* YOUR CODE HERE */
            }
          </View>
        </View></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("supportSendFeedback");
      }}><View style={styles.row}>
          <Pressable onPress={() => {
            navigation.navigate("login");
          }}><View style={styles.col}>
            {
                /* YOUR CODE HERE */
              }
          </View></Pressable>
          <Pressable onPress={() => {
            navigation.navigate("Terms and Conditions");
          }}><View style={styles.col}>
            {
                /* YOUR CODE HERE */
              }
          </View></Pressable>
        </View></Pressable>
        <View style={styles.row}>
          <Pressable onPress={() => {
          navigation.navigate("Privacy Policy");
        }}><View style={styles.col}>
            {
              /* YOUR CODE HERE */
            }
          </View></Pressable>
          <Pressable onPress={() => {
          navigation.navigate("largeGrid1");
        }}><View style={styles.col}>
            {
              /* YOUR CODE HERE */
            }
          </View></Pressable>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gridContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 5,
    padding: 5,
    justifyContent: "center"
  },
  col: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cALTSMHe: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default LargeGrid;