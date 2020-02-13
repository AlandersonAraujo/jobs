import React, {Component} from 'react';
import {
  Container,
  TabsContainer,
  Tabs,
  TabItem,
  TabHeader,
  Image,
  TabItemHeader,
  TextFooter,
  TextFooter2,
  Title,
  TextFooter3,
} from './styles';

import google from '../../assets/google.png';
import next from '../../assets/next.png';
import nubank from '../../assets/nubank.png';
import rico from '../../assets/rico.png';
import uber from '../../assets/uber.png';
import Header from '../../components/Header';

export default class TabsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      setData: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: [
        {
          zk: '1',
          tipo: 'CONTRATO',
          image: google,
          cargo: 'Front-end',
          valor: '$60/h',
          empresa: 'Google',
        },
        {
          zk: '2',
          tipo: 'CARTEIRA',
          image: next,
          cargo: 'Front-end',
          valor: '$60/h',
          empresa: 'Next',
        },
        {
          zk: '3',
          tipo: 'CONTRATO',
          image: nubank,
          cargo: 'Front-end',
          valor: '$65/h',
          empresa: 'Nubank',
        },
        {
          zk: '4',
          tipo: 'CONTRATO',
          image: rico,
          cargo: 'Front-end',
          valor: '$75/h',
          empresa: 'Rico',
        },
        {
          zk: '5',
          tipo: 'CONTRATO',
          image: uber,
          cargo: 'Front-end',
          valor: '$55/h',
          empresa: 'Uber',
        },
      ],
    });
  }

  render() {
    return (
      <Container>
        <Title>Recentes</Title>
        <TabsContainer>
          {this.state.data.map(item => (
            <Tabs key={item.zk}>
              <TabItem>
                <TabHeader>
                  <Image source={item.image} />
                  <TabItemHeader>
                    <TextFooter>{item.cargo}</TextFooter>
                    <TextFooter2>{item.empresa}</TextFooter2>
                  </TabItemHeader>
                  <TextFooter3>{item.valor}</TextFooter3>
                </TabHeader>
              </TabItem>
            </Tabs>
          ))}
        </TabsContainer>
      </Container>
    );
  }
}
