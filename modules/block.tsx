import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Noimg from "./img/noimg.png";

interface Props {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: string;
    title: string;
    url: string;
    image: string;
}

export const Block: React.FC<Props> = ({ author, content, description, publishedAt, source, title, url, image }) => {
    const TitleLimit = (abbrTitle: string) => {
        return abbrTitle.substr(0, 18) + "...";
    };
    const PublishedLimit = (abbrPublished: string) => {
        return abbrPublished.split("T", 1);
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageArea}>
                <Image style={styles.image} source={{ uri: image ?? Noimg }} />
            </View>
            <View style={styles.contentArea}>
                {/* <Text>{title.split("-", 1)}</Text> */}
                <Text>{TitleLimit(title)}</Text>
                <Text>掲載日:{PublishedLimit(publishedAt)}</Text>
            </View>
            {/* <Text>{content}</Text>
            <Text>{description}</Text>
            <Text>{publishedAt}</Text>
            <Text>{title}</Text>
            <Text>{url}</Text>
            <Text>{image}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        borderWidth: 1,
        borderColor: "#20232a",
    },
    imageArea: {
        flex: 0.3,
    },
    image: {
        height: 70,
        width: 70,
    },
    contentArea: {
        flex: 1,
    },
});
