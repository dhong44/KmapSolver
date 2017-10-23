import m from 'mithril';
import calculateExpression from '../helpers/OutputExpressionHelper';

export default {
  view(vnode){
    return <div>
      <p>Sum of Products: { calculateExpression(vnode.attrs.logicFns, "1") }</p>
      <p>Product of Sums: { calculateExpression(vnode.attrs.logicFns, "0") }</p>
    </div>
  }
};