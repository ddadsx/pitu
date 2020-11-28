import React from 'react';
import { Logo, HeaderContainer } from './styles';
import Icone from '../../assets/weee.png'

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Weee - Encurtador de URL'/>
                <h1>Weee</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;