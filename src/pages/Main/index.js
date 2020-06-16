import React from 'react';

import Icon from 'react-native-vector-icons/materialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/component/Header';
import Tabs from '~/component/Tabs';
import Menu from '~/component/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation }from './styles';
import { Title } from '~/component/Header/styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

     if(translationY >= 100) {
       opened = true
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(offset);
      });
    }

  }

  return (
    <Container>
      <header />

      <Content>
        <Menu  translateY={translateY} />

        <PanGestureHandler 
          onGestureEvent={animatedEven}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }), 
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 7.611,35</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferia de R$ 20,00 recebida de Joyce Lavinas Andrade Nicolau hoje as 18:00
              </Annotation>
            </CardFooter>
          </Card>

      </PanGestureHandler>  
      </Content>


      <Tabs translateY={translateY} />
    </Container> 
  );
} 