import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Bg from './bg.png';

export const BackgroundWrap = styled(Container)`
    background-image: url(${Bg});
    padding-top:40px;
    height:100%;

    .card {
        width: 90%;
        display: block;
        margin: auto;
        margin-bottom: 40px;
        box-shadow: 6px 6px 30px #000;
        background: #4b56c0;
        }
`;
