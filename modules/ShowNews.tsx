import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

// interface Props {
//     // news?: string[];
//     // news?: object[];
//     news: any;
// }

// export const ShowNews: React.FC<Props> = () => {
export const ShowNews: React.FC = () => {
    const [news, setNews] = useState([]);

    const url = "http://newsapi.org/v2/top-headlines?" + "country=us&" + "apiKey=e29c6ea3a4614492b6c06cb8ac536c34";

    useEffect(() => {
        const getNews = async () => {
            try {
                console.log("成功");
                const response = await axios.get(url);
                console.log(response.data.articles);
                setNews(response.data.articles);
                // setNews({
                //     author: response.data.aricles.author,
                //     content: response.data.aricles.content,
                //     description: response.data.aricles.description,
                //     publishedAt: response.data.aricles.publishedAt,
                //     source: response.data.aricles.source.name,
                //     title: response.data.aricles.title,
                //     url: response.data.aricles.url,
                //     image: response.data.aricles.urlToImage,
                // });
            } catch (error) {
                console.log("失敗");
                console.log(error);
            }
        };
        getNews();
    }, []);
    console.log(news);

    return (
        <View>
            {Object.keys(news).map((index: any) => {
                return <Text key={index}>著者:{news[index]["author"]}</Text>;
                // console.log(news[index]);
            })}
            {/* <Text>{news[0]}</Text> */}
            <Text>test</Text>
        </View>
    );
    // console.log(news.news);
    // const hoge = news.news;
    // console.log(hoge[0].title);
    // if (news instanceof Array) {
    // const hoge = news.map((news: any, index: number) => {
    //     <Text>{index}</Text>;
    // });
    // if (news instanceof Array) {
    //     return news.map((news: any) => {
    //         <Text>a</Text>;
    //     });
    // } else {
    //     return <Text>ERROR</Text>;
    // }

    // return (
    //     <View>
    //         {/* // <Text>hoge</Text> */}

    //         {/* {news.map((news: any) => {
    //             <Text>a</Text>;
    //         })} */}
    //     </View>
    // );

    // return <Text>hogehoge</Text>;

    // return (
    //     <View>
    //         {/* {Object.keys(news).map((order: any) => {
    //             <Text>order</Text>;
    //         })} */}
    //         {Object.keys(hoge).map((order, index) => {
    //             return (
    //                 <Text key={index}>
    //                     {order[0]},{index[0]}
    //                 </Text>
    //             );
    //         })}
    //     </View>
    // );
};
