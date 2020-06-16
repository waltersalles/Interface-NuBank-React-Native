import React from 'react';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText } from './styles.js';

export default function Menu ({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0,150],
              outputRange: [0, 1],
            }),
          }} >
            <Code>
                <QRCode 
                    value="https://github.com/waltersalles"
                    size={80}
                    fgcolor="FFF"
                    bgColor="8B10AE "
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name = "help-outline" size = {20} color = "#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name = "person-outline" size = {20} color = "#FFF" />
                    <NavText>Meu perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name = "credit-card" size = {20} color = "#FFF" />
                    <NavText>Configurar cartao</NavText>
                </NavItem>
                <NavItem>
                    <Icon name = "smartphone" size = {20} color = "#FFF" />
                    <NavText>Configuracoes do app</NavText>
                </NavItem>
            </Nav>

                <SignOutButton onPress={() => {}}>
                    <SignOutButtonText>Sair</SignOutButtonText>
                </SignOutButton> 
        </Container>
    )
}