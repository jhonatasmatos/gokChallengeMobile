import React, { useEffect, useCallback, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';

import { 
  Container,
  Header,
  HeaderButton,
  ButtonText,
  UserList,
  User,
  Top,
  PhotoContainer,
  InfoContainer,
  Name,
  GithubUser,
  IconsContainer,
  ChevronRight,
  TrashContainer,
  Bottom,
  CompanyContainer,
  CompanyName,
  LocationContainer,
  LocationName,
  StarredContainer,
  QuantityStarred
} from './styles';

import githubImage from '../../assets/githubImage.png';

import api from '../../services/api';

interface Params {
  userName: string;
}

// interface StarredRepo {
//   id: number;
//   name: string;
//   description: string;
//   html_url: number;
//   languages_url: string;
// }

interface User {
  id: number,
  name: string,
  login: string,
  stars: number,
  company: string,
  location: string,
  avatar_url: string;
}

const users = [
  {
    id: 123,
    name: 'jhonatas matos',
    login: '@jhonatas',
    stars: 3,
    company: 'GO.K',
    location: 'Brazil',
    avatar_url: 'https://avatars2.githubusercontent.com/u/16242029?v=4'
  }
]

const UsersList: React.FC = () => {
  // const [users, setUsers] = useState<User[]>([]);

  const route = useRoute();
  const routeParams = route.params as Params;

  // useEffect(() => {
  //   async function getUsers(): Promise<void> {
  //     try {
  //       const response = await api.get(`/users`);
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   getUsers();
  // }, []);

  return (
    <Container>
      <Header>
        <Image source={githubImage} style={{ width: 96, height: 40}} />
        <HeaderButton onPress={() => {}}>
          <ButtonText>Adicionar novo</ButtonText>
        </HeaderButton>
      </Header>

      <UserList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <User>
            <Top>
              <PhotoContainer>
                <Image
                  style={
                    { width: 64, height: 64, borderRadius: 32 }
                  }
                  source={{ uri: item.avatar_url}}
                />
              </PhotoContainer>

              <InfoContainer>
                <Name>{item.name}</Name>
                <GithubUser>{item.login}</GithubUser>
              </InfoContainer>

              <IconsContainer>
                <ChevronRight>
                  <Ionicon name='chevron-forward-outline' size={24} style={{ color: '#000' }} />
                </ChevronRight>
                <TrashContainer>
                  <Feather name='trash' size={24} style={{ color: '#000' }} />
                </TrashContainer>
              </IconsContainer>
            </Top>
            <Bottom>
              <CompanyContainer>
                <Ionicon name='business-outline' size={24} style={{ color: '#E5E5E5' }} />
                <CompanyName>{item.company}</CompanyName>
              </CompanyContainer>

              <LocationContainer>
                <Ionicon name='location-outline' size={24} style={{ color: '#E5E5E5' }} />
                <LocationName>{item.location}</LocationName>
              </LocationContainer>

              <StarredContainer>
                <Feather name='star' size={24} style={{ color: '#E5E5E5' }} />
                <QuantityStarred>3</QuantityStarred>
              </StarredContainer>
            </Bottom>
          </User>
        )}
      />
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
)(UsersList);
