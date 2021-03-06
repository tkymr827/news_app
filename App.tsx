import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ShowNews } from "./modules/ShowNews";

export default function App() {
    return (
        <View style={styles.container}>
            {/* {news.length ? <ShowNews news={news} /> : <Text>Loading</Text>} */}
            <ShowNews />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
