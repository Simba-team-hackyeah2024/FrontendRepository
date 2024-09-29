import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";

const mockQuestions = [
        {
                'question': 'Why are you gay?'
        },
        {
                'question': 'Why are you gay?'
        },
        {
                'question': 'Why are you gay?'
        },
        {
                'question': 'Why are you gay?'
        },
        {
                'question': 'Why are you gay?'
        },
]

const iconColors = [    //NOTE: from bad to good (referenced by index in map function)

]

export const Questions = () => {
        return (
                <View
                        style={{
                                width: "100%",
                                padding: "2.5%",
                        }}
                >
                        {mockQuestions.map((question: any, index: number) => {
                                return (

                                        <View>
                                                <View>
                                                        <Text>{question.question}</Text>
                                                </View>
                                                <View>
                                                        <View>
                                                                <Icon name="sad-tear" />
                                                        </View>
                                                        <View>
                                                                <Icon name="sad-tear" />
                                                        </View>
                                                        <View>
                                                                <Icon name="sad-tear" />
                                                        </View>
                                                        <View>
                                                                <Icon name="sad-tear" />
                                                        </View>
                                                        <View>
                                                                <Icon name="sad-tear" />
                                                        </View>
                                                </View>
                                        </View>
                                )
                        })}
                </View>
        )
}
