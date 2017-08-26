import m from 'mithril';
import calculateExpression from '../helpers/OutputExpressionHelper';

export default {
  view(vnode){
    return <p>Output: { calculateExpression(vnode.attrs.logicFns) }</p>
  }
};