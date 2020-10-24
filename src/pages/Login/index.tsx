import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

import { 
  Container,
  Content, 
  ContainerLogo,
  Logo,
  ContainerText,
  Title,
  Text,
  ContainerInput,
  Field,
  Input,
  ContainerButton,
  Button,
  ButtonText,
  ContainerFooter,
  FooterText 
} from './styles';

import githubImage from '../../assets/githubImage.png';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [userName, setUserName] = useState('');

  const handleRegister = () => {
    
  }

  const fillUserName = (text: string) => {
    text.length < 1 ? setIsDisabled(true) : setIsDisabled(false);

    setUserName(text);
  }

  return (
    <Container>
      <Content>
        <ContainerLogo>
          <Logo source={githubImage} />
        </ContainerLogo>

        <ContainerText>
          <Title>Buscar usuário</Title>
          <Text>Crie sua conta através do seu usuário do GitHub</Text>
        </ContainerText>

        <ContainerInput>
          <Input>
            <Icon name='person-circle-outline' size={24} style={{ paddingLeft: 14, paddingRight: 8, color: '#7E7E7E' }} />      
            <Field 
              placeholder='@username'
              value={userName}
              onChangeText={text => fillUserName(text)} 
            />
          </Input>
        </ContainerInput>

        <ContainerButton>
          <Button disabled={isDisabled} enabled={isDisabled} onPress={handleRegister}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </ContainerButton>

        <ContainerFooter>
          <FooterText>Termos de política e privacidade</FooterText>
        </ContainerFooter>
      </Content>
    </Container>
  );
};

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
