import AirMax270 from './dataImg/AirMax270.jpg'
import ChuckTaylorAllStar from './dataImg/ChuckTaylorAllStar.jpg'
import EndorphinSpeed from './dataImg/EndorphinSpeed.jpeg'
import FreshFoam1080v1 from './dataImg/FreshFoam1080v1.jpg'
import GelKayano27 from './dataImg/GelKayano27.jpeg'
import HOVRPhantom from './dataImg/HOVRPhantom.jpg'
import NanoX1 from './dataImg/NanoX1.jpeg'
import OldSkool from './dataImg/OldSkool.jpeg'
import RSXpuma from './dataImg/RSXpuma.jpg'
import UltraBoost from './dataImg/UltraBoost.jpg'
import AirZoomPegasus37 from './dataImg/AirZoomPegasus37.jpg'
import Cali from './dataImg/Cali.jpg'
import GOrunRazor3 from './dataImg/GOrunRazor3.jpg'
import zapatill from './dataImg/zapatill.jpg'
import JackPurcell from './dataImg/JackPurcell.jpg'
import NoMedi from './dataImg/NoMedi.jpg'
import RayTrace from './dataImg/RayTrace.jpg'
import Wildcat from './dataImg/Wildcat.jpg'
import AdrenalineGTS21 from './dataImg/AdrenalineGTS21.jpg'
import AirJordan1 from './dataImg/AirJordan1.jpg'
import Bondi7 from './dataImg/Bondi7.jpg'
import Boost350 from './dataImg/Boost350.jpg'
import ClubC85 from './dataImg/ClubC85.jpg'
import Curry7 from './dataImg/Curry7.jpeg'
import RallyPro from './dataImg/RallyPro.jpg'
import Sk8Hi from './dataImg/Sk8Hi.jpg'
import Triumph18 from './dataImg/Triumph18.jpg'
import BushidoII from './dataImg/BushidoII.jpg'
import Clifton7 from './dataImg/Clifton7.jpg'
import DisruptorII from './dataImg/DisruptorII.png'
import DLites from './dataImg/DLites.jpg'
import Ghost13 from './dataImg/Ghost13.jpg'
import Moab2 from './dataImg/Moab2.jpg'
import MontrailFKT from './dataImg/MontrailFKT.jpg'
import zapapro from './dataImg/zapapro.jpg'
import Pure from './dataImg/Pure.jpg'
import Speedcross5 from './dataImg/Speedcross5.jpg'
import UltraFastpack from './dataImg/UltraFastpack.jpg'
import waverrider from './dataImg/waverrider.jpg'


const sneakers = [
  { id: 1, marca: 'Nike', nombre: 'Air Max 270', empresa: 'Nike Inc.', precio: 150, descuento: 10, img: AirMax270 },
  { id: 2, marca: 'Adidas', nombre: 'Ultra Boost', empresa: 'Adidas AG', precio: 180, img: UltraBoost },
  { id: 3, marca: 'Puma', nombre: 'RS-X', empresa: 'Puma SE', precio: 120, descuento: 15, img: RSXpuma },
  { id: 4, marca: 'Reebok', nombre: 'Nano X1', empresa: 'Reebok International', precio: 130, img: NanoX1 },
  { id: 5, marca: 'Asics', nombre: 'Gel-Kayano 27', empresa: 'Asics Corporation', precio: 160, descuento: 20, img: GelKayano27 },
  { id: 6, marca: 'New Balance', nombre: 'Fresh Foam 1080v10', empresa: 'New Balance', precio: 150, img: FreshFoam1080v1 },
  { id: 7, marca: 'Under Armour', nombre: 'HOVR Phantom', empresa: 'Under Armour', precio: 140, descuento: 25, img: HOVRPhantom },
  { id: 8, marca: 'Converse', nombre: 'Chuck Taylor All Star', empresa: 'Nike Inc.', precio: 60, img: ChuckTaylorAllStar },
  { id: 9, marca: 'Vans', nombre: 'Old Skool', empresa: 'VF Corporation', precio: 70, descuento: 5, img: OldSkool },
  { id: 10, marca: 'Saucony', nombre: 'Endorphin Speed', empresa: 'Saucony', precio: 150, img: EndorphinSpeed },
  { id: 11, marca: 'Mizuno', nombre: 'Wave Rider 24', empresa: 'Mizuno Corporation', precio: 140, img: waverrider },
  { id: 12, marca: 'Brooks', nombre: 'Ghost 13', empresa: 'Brooks Sports, Inc.', precio: 130, descuento: 10, img: Ghost13 },
  { id: 13, marca: 'Fila', nombre: 'Disruptor II', empresa: 'Fila Korea', precio: 80, img: DisruptorII },
  { id: 14, marca: 'Skechers', nombre: 'D-Lites', empresa: 'Skechers USA, Inc.', precio: 70, descuento: 15, img: DLites },
  { id: 15, marca: 'Hoka One One', nombre: 'Clifton 7', empresa: 'Deckers Outdoor Corporation', precio: 140, img: Clifton7 },
  { id: 16, marca: 'Salomon', nombre: 'Speedcross 5', empresa: 'Salomon Group', precio: 130, img: Speedcross5 },
  { id: 17, marca: 'Merrell', nombre: 'Moab 2', empresa: 'Merrell', precio: 120, descuento: 20, img: Moab2 },
  { id: 18, marca: 'La Sportiva', nombre: 'Bushido II', empresa: 'La Sportiva', precio: 130, img: BushidoII },
  { id: 19, marca: 'Columbia', nombre: 'Montrail FKT', empresa: 'Columbia Sportswear', precio: 150, descuento: 25, img: MontrailFKT },
  { id: 20, marca: 'North Face', nombre: 'Ultra Fastpack', empresa: 'VF Corporation', precio: 140, img: UltraFastpack },
  { id: 21, marca: 'Timberland', nombre: 'PRO', empresa: 'Timberland LLC', precio: 160, img: zapapro },
  { id: 22, marca: 'DC Shoes', nombre: 'Pure', empresa: 'Quiksilver', precio: 90, descuento: 15, img: Pure },
  { id: 23, marca: 'Jordan', nombre: 'Air Jordan 1', empresa: 'Nike Inc.', precio: 170 , img: AirJordan1},
  { id: 24, marca: 'Yeezy', nombre: 'Boost 350', empresa: 'Adidas AG', precio: 220 , img: Boost350},
  { id: 25, marca: 'Champion', nombre: 'Rally Pro', empresa: 'Hanesbrands Inc.', precio: 80, descuento: 10 , img: RallyPro},
  { id: 26, marca: 'Under Armour', nombre: 'Curry 7', empresa: 'Under Armour', precio: 140 , img: Curry7},
  { id: 27, marca: 'Reebok', nombre: 'Club C 85', empresa: 'Reebok International', precio: 90 , img:ClubC85},
  { id: 28, marca: 'Vans', nombre: 'Sk8-Hi', empresa: 'VF Corporation', precio: 75, descuento: 5 , img: Sk8Hi},
  { id: 29, marca: 'Saucony', nombre: 'Triumph 18', empresa: 'Saucony', precio: 160, img: Triumph18 },
  { id: 30, marca: 'Brooks', nombre: 'Adrenaline GTS 21', empresa: 'Brooks Sports, Inc.', precio: 130, descuento: 10, img: AdrenalineGTS21 },
  { id: 31, marca: 'Hoka One One', nombre: 'Bondi 7', empresa: 'Deckers Outdoor Corporation', precio: 150 ,img: Bondi7},
  { id: 32, marca: 'Puma', nombre: 'Cali', empresa: 'Puma SE', precio: 90, descuento: 15, img: Cali },
  { id: 33, marca: 'Nike', nombre: 'Air Zoom Pegasus 37', empresa: 'Nike Inc.', precio: 120, img: AirZoomPegasus37 },
  { id: 34, marca: 'Adidas', nombre: 'NMD_R1', empresa: 'Adidas AG', precio: 140 , img: NoMedi},
  { id: 35, marca: 'Asics', nombre: 'GT-2000 9', empresa: 'Asics Corporation', precio: 120, descuento: 20 , img: zapatill},
  { id: 36, marca: 'New Balance', nombre: '574', empresa: 'New Balance', precio: 80  },
  { id: 37, marca: 'Converse', nombre: 'Jack Purcell', empresa: 'Nike Inc.', precio: 70, img: JackPurcell },
  { id: 38, marca: 'Fila', nombre: 'Ray Tracer', empresa: 'Fila Korea', precio: 75, descuento: 10 , img: RayTrace},
  { id: 39, marca: 'Skechers', nombre: 'GOrun Razor 3', empresa: 'Skechers USA, Inc.', precio: 125, img: GOrunRazor3 },
  { id: 40, marca: 'La Sportiva', nombre: 'Wildcat', empresa: 'La Sportiva', precio: 110, img: Wildcat }
];

export default sneakers;