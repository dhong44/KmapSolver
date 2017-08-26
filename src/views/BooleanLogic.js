import m from 'mithril';
import createLogicFns from '../helpers/LogicFnsHelper';
import TruthTable from './TruthTable';
import KMap from './KMap';

let BooleanLogic = {
  oninit(vnode){
    this.logicFns = createLogicFns(vnode.attrs.inputs);
    this.kmapRows = Math.floor(vnode.attrs.inputs / 2);
    this.kmapCols = Math.ceil(vnode.attrs.inputs / 2);
  },

  view(){
    return <div class="columns">
      <TruthTable logicFns={this.logicFns}/>
      <KMap colVars={this.kmapCols} rowVars={this.kmapRows} logicFns={this.logicFns}/>
    </div>
  }
};

export default BooleanLogic;