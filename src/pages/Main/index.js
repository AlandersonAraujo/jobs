import React, {Component} from 'react';
import {Container, TitleMain} from './styles';
import Header from '../../components/Header';
import TabsProduct from '../../components/TabsProduct';
import TabsList from '../../components/TabsList';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <TitleMain>Front-end</TitleMain>
        <TabsProduct />
        <TabsList />
      </Container>
    );
  }
}
