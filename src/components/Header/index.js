import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, ContainerHeader, ContainerIcon} from './styles';

export default function Header() {
  return (
    <Container>
      <ContainerHeader>
        <Icon name="inbox" size={25} color="#fff" />
        <ContainerIcon>
          <Icon
            name="search"
            size={21}
            color="#fff"
            style={{marginRight: 35}}
          />
          <Icon name="sliders" size={25} color="#fff" />
        </ContainerIcon>
      </ContainerHeader>
    </Container>
  );
}
