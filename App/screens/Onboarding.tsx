import React from "react";
import { Button } from "react-native";

export class Onboarding extends React.Component {
    render() {
        return (
            <>
                <Button title="Got it!" onPress={() => this.props.navigation.navigate("Overview")}></Button>
            </>
        )
     }
}