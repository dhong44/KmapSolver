import { letterSequence } from '../helpers/LetterSequenceHelper';
import m from 'mithril';

let TruthTableHead = {
  oninit(vnode){
    this.headings = letterSequence(vnode.attrs.variables);
    this.headings.push("Output");
  },

  view(){
    return <tr>
      {this.headings.map(heading =>
      <th>{heading}</th>
      )}
    </tr>
  }
};

export default TruthTableHead;