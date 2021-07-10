import logoImg from '../../assets/img/main_logo.svg';

import * as S from './styled';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src={logoImg} alt="main logo" />
      <S.Title>Truephone</S.Title>
    </S.Container>
  );
};

export default Header;
