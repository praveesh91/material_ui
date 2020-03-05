import React from 'react';
import styled from 'styled-components';

export default function Background() {
    const StyledBackground = styled.div`
        height: 40vh;
        background-color: #63DAFB;
        position: absolute;
        width: 100%;
        top: 82px;
        left: 0px;
    `;
    return (
        <StyledBackground />
    )
}
