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
              <div key={link.id}>
                <Link href={link.href}>
                  {link.name}
                </Link>
                <div className="menu_line"></div>
              </div>
              )
            )
          )
        }
    </nav>
  );
};

export default MobileMenu;