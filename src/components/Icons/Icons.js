import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {
  GiBlacksmith,
  GiBookCover,
  GiOpenBook,
  GiCastle,
  GiCaveEntrance,
  GiCrossMark,
  GiHutsVillage,
  GiPortal,
  GiVillage,
  GiTavernSign,
  GiWhiteTower,
  GiWhiteBook,
  GiShoppingBag,
  GiWindmill,
  GiWoodenDoor,

} from "react-icons/gi";

import {MdLocationOn} from "react-icons/md"
import { IconContext } from "react-icons";
import {
  BLACKSMITH,
  BOOKSTORE,
  CAVE,
  CITY,
  DUNGEON,
  FAR,
  FARM,
  FORT,
  MERCHANT,
  MID,
  NEAR,
  PORTAL,
  TAVERN,
  TOWN,
  UNKNOWN,
  VILLAGE,
} from "../consts";

export const determineIcon = ({ type, major }, zoom) => {
  switch (type) {
    case CITY:
      if (zoom >= FAR || major) {
        return city;
      } else {
        return null;
      }
    case BOOKSTORE:
        if (zoom >= FAR || major) {
          return bookstore;
        } else {
          return null;
        }
    case BLACKSMITH:
       if (zoom >= FAR || major) {
            return blacksmith;
          } else {
            return null;
          }
    case VILLAGE:
      if (zoom >= NEAR || major) {
        return village;
      } else {
        return null;
      }
    case TOWN:
      if (zoom >= MID || major) {
        return town;
      } else {
        return null;
      }
    case DUNGEON:
      if (zoom >= NEAR || major) {
        return dungeon;
      } else {
        return null;
      }
    case CAVE:
      if (zoom >= NEAR || major) {
        return cave;
      } else {
        return null;
      }
    case FORT:
      if (zoom >= 4 || major) {
        return fort;
      } else {
        return null;
      }
    case PORTAL:
      if (zoom >= 5 || major) {
        return portal;
      } else {
        return null;
      }
    case MERCHANT:
        if (zoom >= 5 || major) {
          return merchant;
        } else {
          return null;
        }
    case UNKNOWN:
      if (zoom >= NEAR || major) {
        return unknown;
      } else {
        return null;
      }
    case FARM:
      if (zoom >= NEAR || major) {
        return farm;
      } else {
        return null;
      }
    case TAVERN:
      return tavern;
    default:
      console.error("Invalid Type", type);
      return null;
  }
};

export const blacksmith = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "30px" , color:"orange"}}>
      <div>
        <GiBlacksmith />
      </div>
    </IconContext.Provider>
  ),
});

export const city = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "5em" }}>
      <div>
        <GiCastle />
      </div>
    </IconContext.Provider>
  ),
});

export const town = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiVillage />
      </div>
    </IconContext.Provider>
  ),
});

export const tavern = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "30px", color: "blue" }}>
      <div>
      <GiTavernSign />
      </div>
    </IconContext.Provider>
  ),
});

export const merchant = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "30px", color: "orange" }}>
      <div>
      <GiShoppingBag />
      </div>
    </IconContext.Provider>
  ),
});

export const bookstore = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "30px", color: "orange" }}>
      <div>
      <GiOpenBook />
      </div>
    </IconContext.Provider>
  ),
});

export const village = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiHutsVillage />
      </div>
    </IconContext.Provider>
  ),
});

export const dungeon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiWoodenDoor />
      </div>
    </IconContext.Provider>
  ),
});

export const cave = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiCaveEntrance />
      </div>
    </IconContext.Provider>
  ),
});

export const fort = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em", color: "red"}} >
      <div>
        <MdLocationOn />
      </div>
    </IconContext.Provider>
  ),
});

export const portal = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiPortal />
      </div>
    </IconContext.Provider>
  ),
});

export const farm = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiWindmill />
      </div>
    </IconContext.Provider>
  ),
});

export const unknown = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiCrossMark />
      </div>
    </IconContext.Provider>
  ),
});