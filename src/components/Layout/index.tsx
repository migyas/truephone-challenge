import { ReactNode } from 'react';
import * as S from './styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
