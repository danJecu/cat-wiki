import React from 'react';
import styled from 'styled-components';

interface CatInfoProps {
    title: string;
    level: number;
}

function CatInfo({ title, level }: CatInfoProps) {
    return (
        <Container>
            <h1>{title}:</h1>

            <div>
                <Info active={level >= 1} />
                <Info active={level >= 2} />
                <Info active={level >= 3} />
                <Info active={level >= 4} />
                <Info active={level >= 5} />
            </div>
        </Container>
    );
}

export default CatInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.colors.bg};
        margin-bottom: 0.8rem;
    }

    div {
        display: grid;
        grid-template-columns: repeat(5, 60px);
        gap: 4px;
        justify-content: space-between;
        width: 100%;
        max-width: 350px;
    }
`;

interface InfoProps {
    active: boolean;
}

const Info = styled.div<InfoProps>`
    background-color: ${props => (props.active ? '#f2b856' : '#cdc7c4')};
    height: 12px;
    border-radius: 15px;
`;
