import React, { useEffect, useCallback, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { 
  Container,
  Header,
  ChevronBack,
  PhotoContainer,
  FilterContainer,
  Search,
  SearchInput,
  FilterButton,
  RepositoryList,
  Repository,
  ProjectContainer,
  ProjectNameContainer,
  ProjectName,
  StarredContainer,
  DescriptionContainer,
  Description,
  LabelContainer,
  LabelContent,
  LabelText,
  EditButton,
  InfosContainer,
  StackContainer,
  StarsContainer,
  PeopleContainer,
  TimeContainer,
  InfoText
} from './styles';

import compareDate from '../../utils/compare';

import api from '../../services/api';

interface Params {
  userName: string;
}

interface StarredRepo {
  id: number;
  name: string;
  description: string;
  html_url: number;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
  last_update: string;
}

const users = {
    id: 123,
    name: 'jhonatas matos',
    login: '@jhonatas',
    avatar_url: 'https://avatars2.githubusercontent.com/u/16242029?v=4'
}

const tags = [
  {
    'stack': 'Javascript'
  },
  {
    'stack': 'NodeJS'
  },
]

const RepositoriesList: React.FC = () => {
  const [starredRepositories, setStarredRepositories] = useState<StarredRepo[]>([]);

  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function getRepositories(): Promise<void> {
      try {
        const response = await api.get(`/users/jhonatasmatos/starred`);
     
        setStarredRepositories(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    getRepositories();
  }, []);

  return (
    <Container>
      <Header>
        <ChevronBack>
          <Ionicon name='arrow-back-outline' size={24} style={{ color: '#000' }} />
        </ChevronBack>

        <PhotoContainer>
          <Image
            style={
              { width: 32, height: 32, borderRadius: 18 }
            }
            source={{ uri: users.avatar_url}}
          />
        </PhotoContainer>
      </Header>

      <FilterContainer>
        <Search>
          <Ionicon name='search-outline' size={24} style={{ color: '#7E7E7E' }} />
          <SearchInput
            placeholder='Buscar um repositório...'
          />
        </Search>

        <FilterButton>
          <Ionicon name='filter-outline' size={24} style={{ color: '#000' }} />
        </FilterButton>
      </FilterContainer>

      <RepositoryList
        showsVerticalScrollIndicator={false}
        data={starredRepositories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <Repository>
            <ProjectContainer>
              <ProjectNameContainer>
                <ProjectName>{item.name}</ProjectName>
                <Ionicon name='chevron-forward-outline' size={24} style={{ color: '#000', paddingLeft: 8 }} />
              </ProjectNameContainer>

              <StarredContainer>
                <FontAwesome name='star' size={16} style={{ color: '#FFC700' }} />
              </StarredContainer>
            </ProjectContainer>

            <DescriptionContainer>
              <Description numberOfLines={3} ellipsizeMode='clip'>{item.description}</Description>
            </DescriptionContainer>

            <LabelContainer>
              { tags.map(tag => (
                <LabelContent key={tag.stack}>
                  <LabelText># {tag.stack}</LabelText>
                </LabelContent>
              ))}
              <EditButton>
                <Ionicon name='pencil-outline' size={12} style={{ color: '#fff' }} />
              </EditButton>
            </LabelContainer>

            <InfosContainer>
              <StackContainer>
                <Ionicon name='globe-outline' size={16} style={{ color: '#7E7E7E', paddingRight: 5 }} />
                <InfoText>{item.language == null ? 'N/A' : item.language}</InfoText>
              </StackContainer>

              <StarsContainer>
                <Ionicon name='star-outline' size={16} style={{ color: '#7E7E7E', paddingRight: 5 }} />
                <InfoText>{item.stargazers_count}</InfoText>
              </StarsContainer>

              <PeopleContainer>
                <Ionicon name='people-outline' size={16} style={{ color: '#7E7E7E', paddingRight: 5 }} />
                <InfoText>{item.watchers_count}</InfoText>
              </PeopleContainer>

              <TimeContainer>
                <Ionicon name='time-outline' size={16} style={{ color: '#7E7E7E', paddingRight: 5 }} />
                <InfoText>{compareDate(item.updated_at)}</InfoText>
              </TimeContainer>
            </InfosContainer>

          </Repository>
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
)(RepositoriesList);
