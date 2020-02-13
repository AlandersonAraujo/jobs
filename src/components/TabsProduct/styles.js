import styled from 'styled-components/native';

export const Container = styled.View``;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'center',
})`
  margin-left: 20px;
`;

export const Tabs = styled.View`
  display: flex;
  width: 210px;
  margin-right: 14px;
  margin-top: 20px;
`;

export const TabItem = styled.View`
  width: 210px;
  height: 215px;
  background: #21242b;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  position: absolute;
  margin-left: 18px;
`;

export const TabHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  height: 60px;
`;

export const TabItemHeader = styled.View`
  background: #2d313a;
  border-radius: 5px;
  height: 30px;
  width: 60px;
  align-items: center;
  justify-content: center;
  margin-left: 105px;
`;

export const ItemText = styled.Text`
  font-size: 10px;
  color: #fff;
`;

export const TabFooter = styled.View`
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const TextFooter = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const TextFooter2 = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  margin-top: 5px;
  margin-left: 25px;
  margin-bottom: -5px;
`;
