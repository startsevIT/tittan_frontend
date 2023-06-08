import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reception1 from "./mapImg/ресепшн5.jpg"
import reception2 from "./mapImg/ресепшн6.jpg"
import cabGenDir from "./mapImg/кабГенДиректора.jpg"
import BP1 from "./mapImg/проектировщики-строители8.jpg"
import BP2 from "./mapImg/проектировщики-строители9.jpg"
import GR from "./mapImg/GR.jpg"
import PM1 from "./mapImg/управление персоналом1.jpg"
import PM2 from "./mapImg/управление персоналом2.jpg"
import PM3 from "./mapImg/управление персоналом3.jpg"
import lawyers from "./mapImg/юристы.jpg"
import kitchen from "./mapImg/кухня.jpg"
import bigRoom from "./mapImg/болПереговорка.jpg";
import smallRoom from "./mapImg/малПереговорка.jpg";
import counteringRoom1 from "./mapImg/бух2.jpg";
import counteringRoom2 from "./mapImg/бух3.jpg";
import './carouselSlider.css';

class OfficeMap extends React.Component {
  render(){
        return ( 
          <Carousel>
            <div>
              <img src={reception1}/>
              <p class="information">Ресепшен</p>
            </div>
            <div>
              <img src={reception2}/>
              <p class="information">Ресепшен</p>
            </div>
            <div>
              <img src={counteringRoom1}/>
              <p class="information">Бухгалтерия</p>
            </div>
            <div>
              <img src={counteringRoom2}/>
              <p class="information">Бухгалтерия</p>
            </div>
            <div>
              <img src={bigRoom}/>
              <p class="information">Большая Переговорная</p>
            </div>
            <div>
              <img src={smallRoom}/>
              <p class="information">Малая Переговорная</p>
            </div>
            <div>
              <img src={cabGenDir}/>
              <p class="information">Кабинет Ген.Директора</p>
            </div>
            <div>
              <img src={BP1}/>
              <p class="information">Проектировщики-строители</p>
            </div>
            <div>
              <img src={BP2}/>
              <p class="information">Проектировщики-строители</p>
            </div>
            <div>
              <img src={GR}/>
              <p class="information">GR</p>
            </div>
            <div>
              <img src={PM1}/>
              <p class="information">Управление Персоналом</p>
            </div>
            <div>
              <img src={PM2}/>
              <p class="information">Управление Персоналом</p>
            </div>
            <div>
              <img src={PM3}/>
              <p class="information">Управление Персоналом</p>
            </div>
            <div>
              <img src={lawyers}/>
              <p class="information">Юристы</p>
            </div>
            <div>
              <img src={kitchen}/>
              <p class="information">Кухня</p>
            </div>
          </Carousel>
        );
      };
      
  }
export default OfficeMap;