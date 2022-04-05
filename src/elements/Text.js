import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const {bold, color, size, children, margin} = props;

    const styles = {bold: bold, color: color, size: size, margin}

    return (
        <P {...styles}>
            {children}
        </P>
    );
};

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? '700':'400')};
    ${(props) => (props.margin? `margin : ${props.margin};`:'')};
`

Text.defaultProps = {
    children: null,
    bold: false,
    color: '#222831',
    size: '14px',
    margin: false,
}

export default Text;