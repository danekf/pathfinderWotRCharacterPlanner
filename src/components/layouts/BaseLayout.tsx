import React from 'react';

import { Menu } from './Menu/menu';

import '../../index.css'

type BaseLayoutProps = {
  children: React.ReactNode
};

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {
  return(
  <>
    <Menu />
    <section className='pages min-w-screen min-h-[calc(100dvh-32px)] '>{children}</section>
  </>)
};

export default BaseLayout;