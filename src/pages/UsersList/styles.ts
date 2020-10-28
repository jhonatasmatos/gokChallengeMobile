import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Request {
  id: number,
  name: string,
  login: string,
  stars: number,
  company: string,
  location: string,
  avatar_url: string
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

  padding: 0 16px;

  background: #fff;
`;

export const HeaderButton = styled(RectButton)`
  width: 152px;
  height: 32px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background: #000;
`;

export const ButtonText = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 16px;

  color: #fff
`;

export const UserList = styled(FlatList as new () => FlatList<Request>)`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const User = styled.View`
  width: 100%;
  height: 160px;
  border-radius: 8px;

  margin-bottom: 8px;

  align-items: center;
  justify-content: center;

  background: #fff;
`;

export const Top = styled.View`
  width: 100%;
  height: 80px;

  margin-top: 32px;

  flex-direction: row;
`;

export const PhotoContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 34px;

  margin-left: 24px;
`;

export const InfoContainer = styled.View`
  width: 130px;
  height: 40px;

  margin-left: 18px;

  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: 'Mulish-Bold';
  font-size: 16px;

`;

export const GithubUser = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 14px;
`;

export const IconsContainer = styled.View`
  flex: 1;
  height: 40px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ChevronRight = styled.TouchableOpacity`

`;

export const TrashContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 18px;

  align-items: center;
  justify-content: center;

  background: #E8E8E8;
`;

export const Bottom = styled.View`
  width: 100%;
  height: 30px;

  flex-direction: row;
  justify-content: space-around;
`;

export const CompanyContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const CompanyName = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 13px;
  color: #7e7e7e;

  padding-left: 5px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const LocationName = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;
  color: #7e7e7e;

  padding-left: 5px;
`;

export const StarredContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const QuantityStarred = styled.Text`
  font-family: 'Mulish-Regular';
  font-size: 12px;
  color: #7e7e7e;

  padding-left: 5px;
`;
