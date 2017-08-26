import m from 'mithril';
import TruthTableHead from './TruthTableHead';
import TruthTableRow from './TruthTableRow';

let TruthTable = {
  view(vnode){
    return <div class="truth-table">
      <table>
        <TruthTableHead variables={vnode.attrs.logicFns[0].input.length}/>
        {vnode.attrs.logicFns.map(logicFn =>
        <TruthTableRow logicFn={logicFn}/>
          )}
      </table>
    </div>
  }
};

export default TruthTable;