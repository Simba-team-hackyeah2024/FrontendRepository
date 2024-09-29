import { View, Text } from "react-native";

const mockSets = [
        {
                title: 'Daily Questions',
                lastAccess: '2 days ago',
                logoColorHex: '#659A4C',
        },
        {
                title: 'After Meetings',
                lastAccess: '5 days ago',
                logoColorHex: '#CD681F',
        },
        {
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

export const Sets = () => {
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
                                <View
                                        key={index}
                                        style={{
                                                backgroundColor: `rgba(${hexToRgb(set.logoColorHex)}, 0.1)`, // Correct use of rgba
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
                                </View>
                        ))}
                </View>
        );
};
