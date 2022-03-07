import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    flex-wrap:wrap;
`;

export const ListItem = styled.li<{ selected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 20px 30px;
    border: 1px #DDD solid;
    cursor: pointer;
    margin-right: 20px;
    border-color: ${props => props.selected ? 'red' : '#DDD'};

    &:hover {
        background-color: #EEE;
    }
`;

export const ListItemImage = styled.img`
    width: 64px;
    height: 64px;
    object-fit: contain;
    margin-bottom: 20px;
`
