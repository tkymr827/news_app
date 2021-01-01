import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { ShowNews } from "./modules/ShowNews";

export default function App() {
    const [news, setNews] = useState([]);

    const url = "http://newsapi.org/v2/top-headlines?" + "country=us&" + "apiKey=e29c6ea3a4614492b6c06cb8ac536c34";

    useEffect(() => {
        const getNews = async () => {
            try {
                console.log("成功");
                const response = await axios.get(url);
                // console.log(response.data.articles);
                setNews(response.data.articles);
            } catch (error) {
                console.log("失敗");
                console.log(error);
            }
        };
        console.log(news);
        getNews();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start workinaag on your app!</Text>
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
