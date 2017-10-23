import m from 'mithril';
import calculateExpression from '../helpers/OutputExpressionHelper';

export default {
  view(vnode){
    return <div>
      <p>SOP: { calculateExpression(vnode.attrs.logicFns, "1") }</p>
      <p>POS: { calculateExpression(vnode.attrs.logicFns, "0") }</p>
    </div>
  }
};