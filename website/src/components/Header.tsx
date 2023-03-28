import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import DesktopMenu from "@/components/DesktopMenu";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

  function toggleMobileMenu() {
    setMobileMenuIsActive(prev => !prev)
  }

  return (
    <>
      <Link href="#" className="menu-btn" id="blink" onClick={toggleMobileMenu}><span></span></Link>
      <div className={"menu-window" + (mobileMenuIsActive ? ' active' : '')}>
        <div className="menu_container">
          <div className="menu_info">
            <div className="menu_info_1">
              <span>Сыктывкар, ул. Индустриальная, 20/12 <br/><Link href="#">схема проезда</Link></span>
            </div>
            <div className="menu_info_line"></div>
            <div className="menu_info_2">
              <span>Режим работы:<br/>ПН-ПТ с 08:00 до 18:00</span>
            </div>
            <div className="menu_info_line"></div>
            <div className="menu_info_3">
              <div className="menu_info_3_1">
                тел.: <Link href="tel:+7 (9965) 891-596">+7 996 589-15-96</Link>
              </div>
              <div className="menu_info_3_2">
                <div className="menu_info_3_2_content">
                  <Image className='' src="/assets/icons/img2.png" alt="tel" width={0} height={0}/>
                  <Link href="#">Перезвоните мне</Link>
                </div>
              </div>
            </div>
          </div>
          <MobileMenu/>
        </div>
      </div>
      <header>
        <Image className="up_bookmark" src="/assets/icons/img1.png" alt="up_bookmark" width={1000} height={1000} />
        <div className="header_1">
          <div className="container">
            <Link href="/" className="logo_link">
              <Image className="logo" src="/assets/icons/logo.png" alt="logo" width={1000} height={1000} />
            </Link>
            <div className="header_1_1">
              Сыктывкар, ул. Индустриальная, 20/12<br/>
              <Link href="#" className="underlined">схема проезда</Link>
            </div>
            <div className="header_1_2">
              Режим работы:<br/>
              ПН-ПТ с 08:00 до 20:00
            </div>
            <div className="header_1_3">
              <div className="header_1_3_1">тел.: <a href="tel:+7 (9965) 891-596">+7 996 589-15-96</a></div>
              <div className="header_1_3_2">
                <Image src="/assets/icons/img2.png" alt="phone" width={1000} height={1000} />
                <Link href="#" className="underlined">Перезвоните мне</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border_line"></div>
        <div className="header_2">
          <div className="container">
            <DesktopMenu/>
            <div className="content">
              <div className="header_2_2">
                <form action="/">
                  <input type="search" placeholder="Поиск"/>
                </form>
                <Link href="/cart" className="underlined header_basket">Корзина</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border_line"></div>
      </header>
    </>
  );
};

export default Header;