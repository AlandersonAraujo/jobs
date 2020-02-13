import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #2d313a;
`;

export const TitleMain = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding: 15px 27px;
  color: #fff;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'center',
})`
  margin-top: 30px;
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
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
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
  background: #f6f6f6;
  border-radius: 5px;
  height: 30px;
  width: 60px;
  align-items: center;
  justify-content: center;
  margin-left: 105px;
`;

export const ItemText = styled.Text`
  font-size: 10px;
`;

export const TabFooter = styled.View`
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const TextFooter = styled.Text`
  font-size: 19px;
`;

export const TextFooter2 = styled.Text`
  font-size: 15px;
`;
