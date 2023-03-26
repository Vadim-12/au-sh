import { MenuLink } from "@/types/menu";

const menuLinks: MenuLink[] = [
  {id: 0, name: 'Главная', href: '/', inMenu: true},
  {id: 1, name: 'О нас', href: '/about', inMenu: true},
  {id: 2, name: 'Подбор авто', href: '/select', inMenu: true},
  {id: 3, name: 'Оплата и доставка', href: '/payment', inMenu: true},
  {id: 4, name: 'Партнеры', href: '/partners', inMenu: true},
  {id: 5, name: 'Контакты', href: '/contacts', inMenu: true},
  {id: 6, name: 'Корзина', href: '/cart', inMenu: false},
]

const API_URL = process.env.API_URL ? process.env.API_URL : 'http://localhost:5000'

export {
	menuLinks,
  API_URL
}