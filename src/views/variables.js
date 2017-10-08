import m from 'mithril';
import BooleanLogic from './BooleanLogic'
import Navbar from './Navbar'

let Variables = function(n){
  return {
    view(){
      return <div class="container">
        <Navbar />
        <BooleanLogic inputs={n}/>
      </div>
    }
  }
};

export default Variables;


