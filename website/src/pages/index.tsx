import Image from 'next/image'
import MainLayout from "@/components/MainLayout";
import Card from '@/components/Card';

export default function Home() {
  return (
    <MainLayout>
        <div className="main_1">
          <div className="container">
            <h2>Новинки</h2>
            <div className="slider car_news">
              <div className="slider__item">
                <Card
                  mark='HONDA'
                  model='VEZEL'
                  year_start={2018}
                  year_end={2019}
                  img_name='Honda Vezel.png'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="block_border_line"></div>
        <div className="main_2">
          <div className="container">
            <div className="content">
              <div className="box">
                <div className="box_1">
                  <Image src="/assets/icons/car_cabin.png" alt="car_cabin" width={1000} height={1000} />
                  <div className="box_1_inner">
                    <span>
                      NISSAN LEAF 2011-2019<br/>
                      - КОМФОРТ -<br/>
                      - НАДЕЖНОСТЬ -<br/>
                      - ЭКОНОМИЧНОСТЬ -
                    </span>
                  </div>
                </div>
                <div className="box_2">
                  <h2>ПОДБОР ДОСТАВКА ОБСЛУЖИВАНИЕ</h2>
                  <p>Подберем и доставим автомобиль с аукциона Японии по Вашим параметрам</p>
                  <p>Обслуживание и ремонт японских автомобилей</p>
                  <p>Напишите нам и специалист свяжется с вами в течении 30 минут</p>
                  <form>
                    <input type="text" placeholder="Ваши контакты тел / email / VK / telegram" name="user_request"/>
                    <input type="text" placeholder="Текст сообщения"/>
                    <input type="submit" value="НАПИСАТЬ НАМ"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_border_line"></div>
        <div className="main_3">
          <div className="container">
            <div className="content">
              <div className="box">
                <div className="row">
                  <div className="column">
                    <h2>ЗАЯВКА</h2>
                  </div>
                  <div className="column">
                    <h2>ДОГОВОР</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <Image src="/assets/icons/img3.png" alt="car" width={1000} height={1000} />
                  </div>
                  <div className="column">
                    <Image src="/assets/icons/img4.png" alt="hands"width={1000} height={1000} />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <p>Вы связываетесь с нами любым удобным для Вас способом</p>
                  </div>
                  <div className="column">
                    <p>Заключаем договор</p>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <form>
                      <button type="button" name="our_contacts_btn">наши контакты</button>
                    </form>
                  </div>
                  <div className="column">
                    <form>
                      <button type="button" name="our_contacts_btn">скачать договор</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_border_line"></div>
        <div className="main_4">
          <div className="container">
            <div className="content">
              <div className="box">
                <div className="desktop">
                  <div className="row">
                    <div className="column">
                      <h2>ПОИСК ПОДБОР ПОКУПКА</h2>
                    </div>
                    <div className="column">
                      <h2>ДОСТАВКА В РФ И ОФОРМЛЕНИЕ</h2>
                    </div>
                    <div className="column">
                      <h2>ДОСТАВКА ДО ВАШЕГО ГОРОДА</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <Image src="/assets/icons/img5.png" alt="car" width={1000} height={1000} />
                    </div>
                    <div className="column">
                      <Image src="/assets/icons/img6.png" alt="hands" width={1000} height={1000} />
                    </div>
                    <div className="column">
                      <Image src="/assets/icons/img7.png" alt="hands" width={1000} height={1000} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <p>Вам предлагаются подходящие варианты с аукционов. Вы принимаете решение, автомобиль выкупается.</p>
                    </div>
                    <div className="column">
                      <p>Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где происходит таможенное оформление.</p>
                    </div>
                    <div className="column">
                      <p>Мы доставляем автомобиль в любой регион России.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <form>
                        <button type="button" name="our_contacts_btn">аукцион</button>
                      </form>
                    </div>
                    <div className="column">
                      <form>
                        <button type="button" name="our_contacts_btn">узнать больше</button>
                      </form>
                    </div>
                    <div className="column">
                      <form>
                        <button type="button" name="our_contacts_btn">о нас</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mobile">
                  <div className="box_inner">
                    <h2>ПОИСК ПОДБОР ПОКУПКА</h2>
                    <Image src="/assets/icons/img5.png" alt="car" width={1000} height={1000} />
                    <p>Вам предлагаются подходящие варианты с аукционов. Вы принимаете решение, автомобиль выкупается.</p>
                    <form>
                      <button type="button" name="our_contacts_btn">аукцион</button>
                    </form>
                  </div>
                  <div className="block_border_line"></div>
                  <div className="box_inner">
                    <h2>ДОСТАВКА В РФ И ОФОРМЛЕНИЕ</h2>
                    <Image src="/assets/icons/img6.png" alt="hands" width={1000} height={1000} />
                    <p>Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где происходит таможенное оформление.</p>
                    <form>
                      <button type="button" name="our_contacts_btn">узнать больше</button>
                    </form>
                  </div>
                  <div className="block_border_line"></div>
                  <div className="box_inner">
                    <h2>ДОСТАВКА ДО ВАШЕГО ГОРОДА</h2>
                    <Image src="/assets/icons/img7.png" alt="hands" width={1000} height={1000} />
                    <p>Мы доставляем автомобиль в любой регион России.</p>
                    <form>
                      <button type="button" name="our_contacts_btn">о нас</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-wrapper" id='map-wrapper'>
          <Image className='map-img' src='/assets/icons/map.png' alt='map' width={1110} height={1110}/>
        </div>
        
    </MainLayout>
  )
}
