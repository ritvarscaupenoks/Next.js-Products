'use client';
import { Nav, Content, Logo, Icon, H1 } from './NavigationBar.styles';

export default function NavigationBar() {
  return (
    <Nav>
      <Content>
        <Logo>
          <Icon />
          <H1>FakeStore</H1>
        </Logo>
      </Content>
    </Nav>
  );
}