import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    console.log(author);
    return (
        <View style={styles.container}>
            <Text>{author}</Text>
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
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "#20232a",
    },
});
