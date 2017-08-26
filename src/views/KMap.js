import m from 'mithril';
import KMapTable from './KMapTable';
import BooleanExpression from './BooleanExpression';
import grayCode from "../helpers/GrayCodeHelper";

let KMap = {
  oninit(vnode){
    this.rowHeads = grayCode(vnode.attrs.rowVars);
    this.colHeads = grayCode(vnode.attrs.colVars);
    this.grid = [];
    for (let i = 0; i < this.rowHeads.length; i++){
      let row = [];
      for(let j = 0; j < this.colHeads.length; j++){
        row.push(vnode.attrs.logicFns.find(logicFn => (this.rowHeads[i] + this.colHeads[j]) === logicFn.input));
      }
      this.grid.push(row);
    }
  },
  view(vnode){
    return <div class="kmap">
      <KMapTable grid={this.grid}
                 colHeads={this.colHeads}
                 rowHeads={this.rowHeads}
                 rowVars={vnode.attrs.rowVars}
                 colVars={vnode.attrs.colVars}/>
      <BooleanExpression logicFns={vnode.attrs.logicFns}/>
    </div>
  }
};

export default KMap;
