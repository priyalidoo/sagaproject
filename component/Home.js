import { View, Text } from 'react-native';

export const Home = (props) => {
    console.warn(props.route.params);
    const {name, Age}=props.route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ fontSize: 30, color: "red" }}> Welcome to homepage</Text>
            <Text style={{ fontSize: 30, color: "blue" }}> Name:{name}</Text>
            <Text style={{ fontSize: 30, color: "orange" }}> Age:{Age}</Text>
        </View>
    )
}

