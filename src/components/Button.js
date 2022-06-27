import styled from 'styled-components';

//Styling for StyledButton
export const StyledButton = styled.button`
        border: 2px solid green;
        background-color: ${(props) => (props.variant === "outline" ? "white" : "green")};
        color: ${(props) => (props.variant === "outline" ? "green" : "white")};
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;

        // hover styles

        &:hover {
            background-color: ${(props) => (props.variant !== "outline" ? "white" : "green")};
            color: ${(props) => (props.variant !== "outline" ? "green" : "white")};
        }
    `;

//Styling for BlueButton
export const BlueButton = styled(StyledButton)`
    background-color: blue;
    border: none;
`;

//Styling for the gradient button
export const GradientButton = styled(StyledButton)`
    background-color: white;
    color: blue;
    border: 2px solid blue;
`;

//Styling for DarkButton
export const DarkButton = styled(StyledButton)`
    border: 1px solid transparent;
    background: ${(props) => props.theme.dark.primaryColor};
    color: 2px solid ${(props) => props.theme.dark.textColor}
`;