import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const mockQuestions = [
        {
                question: 'Why?',
        },
        {
                question: 'Why?',
        },
        {
                question: 'Why?',
        },
        {
                question: 'Why?',
        },
        {
                question: 'Why not?',
        },
];

const icons = [
        <Image
                key="verybad"
                source={require('../../assets/images/verybad.png')}
                style={{ width: 50, height: 50 }}
        />,
        <Image
                key="bad"
                source={require('../../assets/images/bad.png')}
                style={{ width: 50, height: 50 }}
        />,
        <Image
                key="mid"
                source={require('../../assets/images/mid.png')}
                style={{ width: 50, height: 50 }}
        />,
        <Image
                key="good"
                source={require('../../assets/images/good.png')}
                style={{ width: 50, height: 50 }}
        />,
        <Image
                key="verygood"
                source={require('../../assets/images/verygood.png')}
                style={{ width: 50, height: 50 }}
        />,
];

interface questionsProps {
        endFunction: () => void
}

export const Questions = (props: questionsProps) => {
        const [selectedQuestion, setSelectedQuestion] = useState<number>(0)

        return (
                <View
                        style={{
                                width: "100%",
                                height: "95%",
                                padding: "2.5%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                        }}
                >
                        <View
                                style={{
                                        width: "100%",
                                        padding: 20,
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                        borderRadius: 20,
                                }}
                        >
                                <Text
                                        style={{
                                                fontSize: 20,
                                                textAlign: "center",
                                        }}
                                >
                                        {mockQuestions[selectedQuestion].question}
                                </Text>
                        </View>
                        <View
                                style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        marginTop: 20,
                                        gap: 10,
                                        borderStyle: "solid",
                                        padding: 20,
                                        borderWidth: 1,
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                        borderRadius: 20,
                                }}
                        >
                                {icons.map((icon: JSX.Element, index: number) => (
                                        <TouchableOpacity key={index}
                                                onPress={() => {
                                                        if (selectedQuestion === mockQuestions.length - 1) {
                                                                //maybe some finish screen to add later
                                                                props.endFunction()
                                                        }
                                                        else {
                                                                setSelectedQuestion((prev) => prev + 1)
                                                        }
                                                        //SEND ANSWERS TO DB HERE
                                                }}>
                                                {icon}
                                        </TouchableOpacity>
                                ))}
                        </View>
                </View>
        );
};
