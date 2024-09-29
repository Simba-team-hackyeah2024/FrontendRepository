import { View, Text, TouchableOpacity } from "react-native";

const mockSets = [
        {
                setId: 0,
                title: 'Daily Questions',
                lastAccess: '2 days ago',
                logoColorHex: '#659A4C',
        },
        {
                setId: 1,
                title: 'After Meetings',
                lastAccess: '5 days ago',
                logoColorHex: '#CD681F',
        },
        {
                setId: 2,
                title: 'After Work',
                lastAccess: '3 min ago',
                logoColorHex: '#448BA2',
        },
];

const hexToRgb = (hex: string) => {
        hex = hex.replace(/^#/, '');

        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return `${r}, ${g}, ${b}`;
};

interface SetsProps {
        select: (selected: number) => void
}

export const Sets = (props: SetsProps) => {
        return (
                <View
                        style={{
                                width: "100%",
                                padding: "2.5%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                        }}
                >
                        {mockSets.map((set, index) => (
                                <TouchableOpacity
                                        onPress={() => props.select(set.setId)}
                                        key={index}
                                        style={{
                                                backgroundColor: `rgba(${hexToRgb(set.logoColorHex)}, 0.1)`,
                                                padding: 20,
                                                marginVertical: 5,
                                                borderRadius: 10,
                                                width: "100%",
                                        }}

                                >
                                        <Text
                                                style={{
                                                        fontSize: 18,
                                                }}
                                        >{set.title}</Text>
                                        <Text
                                                style={{
                                                        color: "rgba(0, 0, 0, 0.5)"
                                                }}>{"Last reviewed " + set.lastAccess}</Text>
                                </TouchableOpacity>
                        ))}
                </View>
        );
};
