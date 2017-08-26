import {changeOutput, outputClass} from "../helpers/ChangeOutputHelper"
import m from 'mithril';

let TruthTableRow = {
  view(vnode){
    return <tr class={`${outputClass(vnode.attrs.logicFn.output)}`}
               onclick={ ()=>{changeOutput(vnode.attrs.logicFn)} }>
      { Array.from(vnode.attrs.logicFn.input).map( num =>
      <td>{num}</td>
      )}
      <td>{vnode.attrs.logicFn.output}</td>
    </tr>
  }
};

export default TruthTableRow;
