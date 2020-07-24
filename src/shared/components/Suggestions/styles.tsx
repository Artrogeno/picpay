import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { alignItems: "center", paddingLeft: 16 },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Title = styled.Text``;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Lable = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-top: 14px;
`;
