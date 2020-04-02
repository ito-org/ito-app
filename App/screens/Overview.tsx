import React from "react";
import { Button, Text, StyleSheet } from "react-native";

export class Overview extends React.Component {
    render() {
        let trashStyle = StyleSheet.create( {header: {textAlign: "center", fontSize:20, padding: 5, paddingBottom: 50}});
        return (
            <>
                <Text style={trashStyle.header}>
                    Last DB Fetch: {"\n"}
                    T_I_M_E
                </Text>
                <Text style={trashStyle.header}>
                    Staying Save since {"\n"}
                    A_L_W_A_Y_S
                </Text>
                <Button title="I'm Infected" onPress={() => this.props.navigation.navigate("Endangerment")}></Button>
            </>
        )
    }
}