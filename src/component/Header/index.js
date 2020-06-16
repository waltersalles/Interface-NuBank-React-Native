import React from 'react';
import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/materialIcons';

import logo from '~/assets/Nubank-logo.png';

export default function Header () {
    return (
        <Container>
            <Top>
                <Logo source={} />
                <Title>Walter</Title>
            </Top>
            <Icon name="keybord-arrow-down" size={20} color="#FFF" />          
        </Container>
    );
}