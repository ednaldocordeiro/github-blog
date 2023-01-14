import Logo from '../../assets/logo.svg';

import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <div className='content'>
        <img src={Logo} />
      </div>
    </HeaderContainer>
  )
}