import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import axios from "axios";

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
        endFunction: () => void,
        userId: number,
        setId: number
}

export const Questions = (props: questionsProps) => {
        const [selectedQuestion, setSelectedQuestion] = useState<number>(0)
        const [questions, setQuestions] = useState<any[]>([])
        const [error, setError] = useState<unknown>(null)
        const [loading, setLoading] = useState<boolean>(true)

        const getQuestions = (userId: number = props.userId, setId: number = props.setId) => {
                axios.get(`http://localhost:8080/questions/fromSet/${userId}/${setId}`)
                        .then(res => {
                                console.log(res.data)
                                setQuestions(res.data)
                        }).catch(err => {
                                console.log(err)
                        })
        }


        useEffect(() => {
                getQuestions()
        }, [])

        useEffect(() => {
                console.log(questions)
        }, [questions])

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
                                {(!loading && questions.length > 0) &&
                                        <Text
                                                style={{
                                                        fontSize: 20,
                                                        textAlign: "center",
                                                }}
                                        >
                                                {questions[selectedQuestion].question}
                                        </Text>
                                }
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
                                                        if (selectedQuestion === questions.length - 1) {
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
