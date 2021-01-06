import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Block } from "./block";
import axios from "axios";

export const ShowNews: React.FC = () => {
    const [news, setNews] = useState([]);

    const url = "http://newsapi.org/v2/top-headlines?" + "country=jp&" + "apiKey=e29c6ea3a4614492b6c06cb8ac536c34";

    useEffect(() => {
        const getNews = async () => {
            try {
                console.log("成功");
                const response = await axios.get(url);
                setNews(response.data.articles);
            } catch (error) {
                console.log("失敗");
                console.log(error);
            }
        };
        getNews();
    }, []);
    news.forEach((data: { [key: string]: string }, index: number) => {
        console.log(data);
    });

    return (
        <View style={styles.container}>
            {news.map((data: { [key: string]: string }, index: number) => {
                return (
                    // わざわざ別コンポーネントに渡さなくてもここで表示させればよかったのでは
                    <Block
                        key={index}
                        author={data.author}
                        content={data.content}
                        description={data.description}
                        publishedAt={data.publishedAt}
                        source={data.source}
                        title={data.title}
                        url={data.url}
                        image={data.urlToImage}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
    },
});
