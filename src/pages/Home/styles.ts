import styled from "styled-components/native";
import { Text } from "../../components";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const SelectBox = styled.View`
  border-radius: 40px;
  background-color: #fff;
  padding: 8px 16px;
`;

export const CountryText = styled(Text)`
  color: #473f97;
`;

export const HelpBox = styled.View`
  margin: 16px 0;
  padding: 24px;
  background-color: #473f97;

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  z-index: 2;
`;

export const TitleText = styled(Text)`
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  z-index: 1;

  padding: 16px;
  margin-top: -56px;
  padding-top: 56px;
  background-color: #fff;
  flex: 1;
`;

export const PreventionBox = styled.View`
  flex: 1;
`;

export const ImagesBox = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 1;
  padding: 16px 0;
  align-items: center;
`;

export const ImageLabel = styled(Text)`
  width: 130px;
  color: #000;
  text-align: center;
  margin-top: 16px;
`;

export const OwnTestBox = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OwnTextImage = styled.Image`
  position: absolute;
  bottom: 0;
  left: 8px;
`;

export const OwnTestTextBox = styled.View`
  width: 220px;
  padding-top: 36px;
  padding-bottom: 16px;
`;
