import {
    Container,
    MenuItem,
    Following,
    FollowingHeader,
    InfoContainer,
    Links,
  } from './styles';
  import User from '../User';
  
  function Sidebar() {
    return (
      <Container>
        <MenuItem active>
          <img src='/images/homeIcon.svg'></img>
          <span>Para você</span>
        </MenuItem>
        <MenuItem>
          <img src='/images/peopleIcon.svg'></img>
          <span>Seguindo</span>
        </MenuItem>
        <Following>
          <FollowingHeader>Suas pricipais contas</FollowingHeader>
          <User
            user={{
              name: 'Will Smith',
              username: 'willsmith',
              avatar:
                'data:image/jpeg;base64,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',
            }}
          ></User>
        </Following>
        <InfoContainer>
          <Links margin>
            <a>Início</a>
            <a>Sobre</a>
            <a>Sala de imprensa</a>
            <a>Carreira</a>
            <a>ByteDance</a>
          </Links>
          <Links>
            <a>Ajuda</a>
            <a>Segurança</a>
          </Links>
          <Links>
            <a>Diretrizes da comunidade</a>
            <a>Termos</a>
          </Links>
          <Links margin>
            <a>Privacidade</a>
          </Links>
          <Links margin>
            <a>© 2021 TikTok</a>
          </Links>
        </InfoContainer>
      </Container>
    );
  }
export default Sidebar;