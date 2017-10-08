import m from 'mithril';
import BooleanLogic from './BooleanLogic'
import Navbar from './Navbar'

let twoVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={2}/>
    </div>
  }
};

let threeVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={3}/>
    </div>
  }
};

let fourVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={4}/>
    </div>
  }
};

let fiveVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={5}/>
    </div>
  }
};

let sixVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={6}/>
    </div>
  }
};

let sevenVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={7}/>
    </div>
  }
};

let eightVar = {
  view(){
    return <div class="container">
      <Navbar />
      <BooleanLogic inputs={8}/>
    </div>
  }
};

export {twoVar, threeVar, fourVar, fiveVar, sixVar, sevenVar, eightVar};


