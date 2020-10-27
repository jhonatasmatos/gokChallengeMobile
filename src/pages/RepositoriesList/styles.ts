import styled, { css }  from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Request {
  id: number;
  name: string;
  description: string;
  html_url: number;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
}

export const Container = styled.View`
  flex: 1;

  background: #F8F8F8;
`;

export const Header = styled.View`
  width: 100%;
  height: 72px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  background: #fff;
`;

export const ChevronBack = styled.TouchableOpacity`
`;

export const FilterContainer = styled.View`
  width: 100%;
  height: 42px;

  margin-top: 8px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
`;

export const Search = styled.View`
  width: 296px;
  height: 40px;

  flex-direction: row;

  align-items: center;

  padding: 0 16px;

  background: #fff;
`;

export const SearchInput = styled.TextInput`
  width: 180px;
  height: 40px;

  padding-left: 8px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 62px;
  height: 40px;

  align-items: center;
  justify-content: center;

  background: #fff;
`;

export const PhotoContainer = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 18px;
`;

export const RepositoryList = styled(FlatList as new () => FlatList<Request>)`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const Repository = styled.View`
  width: 100%;
  height: 164px;
  border-radius: 8px;

  margin-bottom: 8px;

  align-items: center;

  background: #fff;
`;

export const ProjectContainer = styled.View`
  width: 100%;
  height: 30px;

  margin-top: 10px;
  padding: 0 20px;

  flex-direction: row;
`;

export const ProjectNameContainer = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
`;

export const ProjectName = styled.Text`
  font-family: 'Mulish-Bold';
  font-size: 16px;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 34px;

  padding: 0px 20px;
`;

export const Description = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 14px;
`;

export const StarredContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 32px;

  background: rgba(255, 199, 0, 0.16);
`;

export const LabelContainer = styled.View`
  width: 100%;
  height: 22px;

  flex-direction: row;
  align-items: center;

  padding: 0px 20px 24px;
`;

export const LabelContent = styled.View`
  width: 94px;
  height: 22px;
  border-radius: 20px;

  margin-right: 4px;

  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.08);
`;

export const EditButton = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  border-radius: 9px;

  align-items: center;
  justify-content: center;

  background: #0017FF;
`;

export const LabelText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;

  color: #000;
`;

export const InfosContainer = styled.View`
  width: 100%;
  height: 22px;

  padding: 0px 20px 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const StackContainer = styled.View`
  width: 80px;
  height: 22px;

  align-items: center;

  flex-direction: row;
`;

export const StarsContainer = styled.View`
  width: 42px;
  height: 22px;

  align-items: center;

  flex-direction: row;
`;

export const PeopleContainer = styled.View`
  width: 42px;
  height: 22px;

  align-items: center;

  flex-direction: row;
`;

export const InfoText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;

  color: #7E7E7E;
`;
  