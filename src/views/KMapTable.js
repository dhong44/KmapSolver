import {changeOutput, outputClass} from "../helpers/ChangeOutputHelper"
import { letterSequence } from '../helpers/LetterSequenceHelper';
import m from 'mithril';

let KMapTable = {
  oninit(vnode){
    this.grid = vnode.attrs.grid.map( (row, i) => {return {heading: vnode.attrs.rowHeads[i], logicFns: row}});
    this.variables = letterSequence(vnode.attrs.rowVars + vnode.attrs.colVars).join('');
  },

  view(vnode){
    return <table>
      <tr>
        <td class="empty" rowSpan={2} colSpan={2}/>
        <th colSpan={this.grid[0].logicFns.length}>
          {this.variables.slice(vnode.attrs.rowVars)}
        </th>
      </tr>
      <tr>
        {vnode.attrs.colHeads.map(heading =>
          <th>{heading}</th>
        )}
      </tr>
      { this.grid.map((row, index) =>
        <tr>
          {index === 0 && <th rowSpan={this.grid.length}>
                          {this.variables.slice(0, vnode.attrs.rowVars)}
                          </th>}
          <th>{row.heading}</th>
          { row.logicFns.map( logicFn =>
            <td class={`output ${outputClass(logicFn.output)}`}
                onclick={() => {changeOutput(logicFn)}}>
            {logicFn.output}
          </td>
          )}
        </tr>
      )}
    </table>
  }
};

export default KMapTable