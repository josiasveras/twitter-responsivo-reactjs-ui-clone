import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </ Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</ EditButton>

            <h1>Jorzias Veras</h1>
            <h2>@jorzias_veras</h2>

            <p>
                Developer at <a href="https://www.metlife.com.br/">@MetLife</ a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 28 de janeiro de 1991
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672</strong> seguidores
                </span>
            </Followage>
        </ ProfileData> 

        <Feed />
    </ Container>  
  );
};

export default ProfilePage;