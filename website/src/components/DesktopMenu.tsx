import React from 'react';
import Link from "next/link";
import { menuLinks } from "@/store/static";
import { useAppSelector } from '@/hooks';

const DesktopMenu = () => {
  const pageId = useAppSelector(state => state.curPage.curPageId)
  
  return (
    <nav className="menu-desktop">
      {
        menuLinks.map(link => (
          link.inMenu && <Link href={link.href} className={'menu__link' + (link.id === pageId ? ' cur' : '')} /*onClick={handleChangePage(link.id)}*/ key={link.id}>{link.name}</Link>
        ))
      }
    </nav>
  );
};

export default DesktopMenu;