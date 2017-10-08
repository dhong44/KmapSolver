import BooleanLogic from './views/BooleanLogic';
import {twoVar, threeVar, fourVar, fiveVar, sixVar, sevenVar, eightVar} from './views/variables';
import './style.css';
import 'bootstrap-css';
import m from 'mithril';

console.log(twoVar);

m.route.prefix("");

m.route(document.body, "/kmap/4", {
  "/kmap/2": twoVar,
  "/kmap/3": threeVar,
  "/kmap/4": fourVar,
  "/kmap/5": fiveVar,
  "/kmap/6": sixVar,
  "/kmap/7": sevenVar,
  "/kmap/8": eightVar
});