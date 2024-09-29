import { Text, View } from "react-native";
import { useState } from "react";
import { Sets } from "./pages/Sets";
import { Questions } from "./pages/Questions";

enum Phase {
        ChooseSet = 0,
        AnswerQuestions = 1,
        ProfileSettings = 2,
        Statistics = 3,
        Notes = 4,
}

export default function Selflect() {
        const [phase, setPhase] = useState<Phase>(Phase.ChooseSet)
        const [selectedSet, setSelectedSet] = useState<number | null>(null)

        return (
                <View>
                        {phase === Phase.ChooseSet &&
                                <Sets />
                        }
                        {phase === Phase.AnswerQuestions &&
                                <Questions />
                        }
                </View>
        );
}
