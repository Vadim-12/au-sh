import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="block_border_line"></div>
      <div className="container">
        <div className="box">
        <Link href='/admin' className='admin-link'>
          <Image src='/assets/icons/admin-icon.png' alt='admin-panel-icon' width={1000} height={1000} />
        </Link>
          <h2>ДОСТАВКА ЭЛЕКТРОМОБИЛЕЙ С АУКЦИОНОВ ЯПОНИИ</h2>
          <div className="block_border_line"></div>
          <div className="content">
            <div className="chapter_one cur_chapter">
              <Link href="/" className="title">Главная</Link>
              <div className="block_border_line"></div>
              <Link href="#" className="subtitle">НОВИНКИ</Link>
              <Link href="#" className="subtitle">ПРЕИМУЩЕСТВА</Link>
              <Link href="#" className="subtitle">ЗАЯВКА</Link>
              <Link href="#" className="subtitle">СДЕЛКА</Link>
              <Link href="#" className="subtitle">ПРОЦЕСС ПОСТАВКИ</Link>
              <Link href="#" className="subtitle">НАШЕ МЕСТОПОЛОЖЕНИЕ</Link>
              <Link href="#" className="subtitle">КАРТА САЙТА</Link>
            </div>
            <div className="chapter_one">
              <Link href="/about" className="title">О нас</Link>
              <div className="block_border_line"></div>
              <Link href="#" className="subtitle">ИСТОРИЯ</Link>
              <Link href="#" className="subtitle">МИССИЯ</Link>
              <Link href="#" className="subtitle">ПРИНЦИПЫ</Link>
              <Link href="#" className="subtitle">ВИДЕО</Link>
              <Link href="#" className="subtitle">НАГРАДЫ</Link>
              <Link href="#" className="subtitle">ОТЗЫВЫ</Link>
            </div>
            <div className="chapter_one">
              <Link href="/select" className="title">Подбор авто</Link>
              <div className="block_border_line"></div>
              <Link href="#" className="subtitle">НАШИ ДЕЙСТВИЯ</Link>
              <Link href="#" className="subtitle">МОДЕЛИ</Link>
              <Link href="#" className="subtitle">ХАРАКТЕРИСТИКИ</Link>
              <Link href="#" className="subtitle">НАША ПОМОЩЬ</Link>
              <Link href="#" className="subtitle">СОВЕТЫ</Link>
            </div>
            <div className="chapter_one">
              <Link href="/payment" className="title">Оплата и доставка</Link>
              <div className="block_border_line"></div>
              <Link href="#" className="subtitle">СУММЫ И СРОКИ</Link>
              <Link href="#" className="subtitle">ГАРАНТИИ</Link>
              <Link href="#" className="subtitle">ВАША ВЫГОДА</Link>
              <Link href="#" className="subtitle">ЮРИДИЧЕСКАЯ ЧИСТОТА</Link>
            </div>
            <div className="chapter_one">
              <Link href="/partners" className="title">Партнеры</Link>
              <div className="block_border_line"></div>
              <Link href="#" className="subtitle">ТОРГОВЫЕ ПЛОЩАДКИ</Link>
              <Link href="#" className="subtitle">ПЕРЕВОЗЧИКИ</Link>
              <Link href="#" className="subtitle">СЕРВИС</Link>
              <Link href="#" className="subtitle">РЕМОНТ</Link>
              <Link href="#" className="subtitle">ЧИП-ТЮНИНГ</Link>
            </div>
            <div className="chapter_one">
              <Link href="/contacts" className="title">Контакты</Link>
              <div className="block_border_line"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;