import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 16 },
}))`
  margin-top: 25px;
`;

interface PropsOptionI {
  bgColor: string;
}

export const Option = styled.TouchableOpacity<PropsOptionI>`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  margin-right: 16px;
  padding: 15px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
