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

const USER_ID = 1       //hardcoded for now

export default function Selflect() {
        const [phase, setPhase] = useState<Phase>(Phase.ChooseSet)
        const [selectedSet, setSelectedSet] = useState<number | null>(null)

        const handleSetChoice = (selected: number) => {
                setSelectedSet(selected)
                setPhase(Phase.AnswerQuestions)
        }

        return (
                <View>
                        {phase === Phase.ChooseSet &&
                                <Sets select={handleSetChoice} />
                        }
                        {phase === Phase.AnswerQuestions &&
                                <Questions endFunction={() => setPhase(Phase.ChooseSet)} userId={1} setId={1} />
                        }
                </View>
        );
}
