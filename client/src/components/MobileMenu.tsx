import React from 'react';
import Link from "next/link";
import { menuLinks } from '@/store/static';

const MobileMenu = () => {
  return (
    <nav className="menu-mobile">
        <div className="menu_line"></div>
        {
          menuLinks.map(link => 
            (
              link.inMenu && (
              <>
                <Link href={link.href} key={link.id}>
                  {link.name}
                </Link>
                <div className="menu_line"></div>
              </>
              )
            )
          )
        }
    </nav>
  );
};

export default MobileMenu;