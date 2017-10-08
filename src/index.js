import Variables from './views/variables';
import './style.css';
import 'bootstrap-css';
import m from 'mithril';

m.route(document.body, "/KmapSolver/4", {
  "/KmapSolver/2": Variables(2),
  "/KmapSolver/3": Variables(3),
  "/KmapSolver/4": Variables(4),
  "/KmapSolver/5": Variables(5),
  "/KmapSolver/6": Variables(6),
  "/KmapSolver/7": Variables(7),
  "/KmapSolver/8": Variables(8)
});
