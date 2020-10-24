import { RectButton } from 'react-native-gesture-handler';
import { KeyboardAvoidingView as Kav, Platform, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled(Platform.OS === 'ios' ? Kav : View).attrs({
  behavior: Platform.OS === 'ios' && 'padding',
})`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1; 
  justify-content: flex-end;

  padding-bottom: 12px;

  background: #fff;
`;

export const ContainerLogo = styled.View`
  padding-top: 60px;
  
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const ContainerText = styled.View`
  width: 100%;
  
  padding-left: 40px;
  padding-top: 70px; 
`;

export const Title = styled.Text`
  font-family: 'Mulish-Bold';
  font-size: 22px;

  color: #000;
`;

export const Text = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;

  width: 280px;

  padding-top: 10px;

  color: #7E7E7E;
`;

export const ContainerInput = styled.View`
  width: 100%;
  
  padding: 0 40px;

  justify-content: center;
  align-items: center;
`;

export const Input = styled.View`
  width: 295px;
  height: 42px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;

  margin: 32px 40px;

  border: 1px solid #E5E5E5;
`;

export const Field = styled.TextInput`
  width: 240px;
  
  font-size: 16px;

  color: #000;
`;

export const ContainerButton = styled.View`
  width: 100%;

  padding: 0 40px;

  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)<ButtonProps>`
  width: 295px;
  height: 42px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background: #000;

  ${props => props.disabled && css`
    background: #E5E5E5;
  `}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ContainerFooter = styled.View`
  flex: 1;

  padding-top: 130px;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;

  color: #7E7E7E;
`;
