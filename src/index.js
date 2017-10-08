import Variables from './views/variables';
import './style.css';
import 'bootstrap-css';
import m from 'mithril';


m.route(document.body, "/4", {
  "/2": Variables(2),
  "/3": Variables(3),
  "/4": Variables(4),
  "/5": Variables(5),
  "/6": Variables(6),
  "/7": Variables(7),
  "/8": Variables(8)
});
