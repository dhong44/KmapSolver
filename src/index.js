import BooleanLogic from './views/BooleanLogic';
import m from 'mithril';

m.route(document.body, "/truth-table/4", {
  "/truth-table/:inputs": BooleanLogic
});