import React, {Component} from 'react';
import {
  Container,
  TabsContainer,
  Tabs,
  TabItem,
  TabHeader,
  Image,
  TabItemHeader,
  ItemText,
  TabFooter,
  TextFooter,
  TextFooter2,
  Title,
} from './styles';

import google from '../../assets/google.png';
import next from '../../assets/next.png';
import nubank from '../../assets/nubank.png';
import rico from '../../assets/rico.png';
import uber from '../../assets/uber.png';
import Header from '../../components/Header';

export default class TabsProduct extends Component {
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
        },
        {
          zk: '2',
          tipo: 'CARTEIRA',
          image: next,
          cargo: 'Front-end',
          valor: '$60/h',
        },
        {
          zk: '3',
          tipo: 'CONTRATO',
          image: nubank,
          cargo: 'Front-end',
          valor: '$65/h',
        },
        {
          zk: '4',
          tipo: 'CONTRATO',
          image: rico,
          cargo: 'Front-end',
          valor: '$75/h',
        },
        {
          zk: '5',
          tipo: 'CONTRATO',
          image: uber,
          cargo: 'Front-end',
          valor: '$55/h',
        },
      ],
    });
  }

  render() {
    return (
      <Container>
        <Title>Para você</Title>
        <TabsContainer>
          {this.state.data.map(item => (
            <Tabs key={item.zk}>
              <TabItem>
                <TabHeader>
                  <Image source={item.image} />
                  <TabItemHeader>
                    <ItemText>{item.tipo}</ItemText>
                  </TabItemHeader>
                </TabHeader>
                <TabFooter>
                  <TextFooter>{item.cargo}</TextFooter>
                  <TextFooter2>{item.valor}</TextFooter2>
                </TabFooter>
              </TabItem>
            </Tabs>
          ))}
        </TabsContainer>
      </Container>
    );
  }
}
