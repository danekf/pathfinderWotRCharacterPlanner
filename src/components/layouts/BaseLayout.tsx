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
    <section className='pages'>{children}</section>
  </>)
};

export default BaseLayout;