import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledButton, BlueButton, GradientButton, DarkButton } from "./components/Button";


//Styling for the gradient button
const theme = {
    dark: {
        primaryColor: "#000",
        textColor: "#fff"
    },
    light: {
        primaryColor: "#fff",
        textColor: "#000",
    }
};

export default function App() {
    
    return (
        <ThemeProvider theme={theme}>
            <div  className="App">
                <div>
                    <StyledButton>Button</StyledButton>
                </div>
                <br />

                <div>
                    <StyledButton variant="outline">Button</StyledButton>
                </div>
                <br />

                <div>
                    <BlueButton as='a'>Button</BlueButton>
                </div>
                <br />
                
                <div>
                    <GradientButton as='a'>Button</GradientButton>
                </div>
                <br />
                
                <div>
                    <DarkButton>Dark Button</DarkButton>
                </div>
                <br />
            </div>
        </ThemeProvider>
    )
};