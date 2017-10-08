import m from 'mithril';

let Navbar = {
  view(){
    return <nav>
      <ul class="nav">
        <li class="nav-item">
          <a href="/2" oncreate={m.route.link} class="nav-link"> 2 variables</a>
        </li>

        <li class="nav-item">
          <a href="/3" oncreate={m.route.link} class="nav-link"> 3 variables</a>
        </li>

        <li class="nav-item">
          <a href="/4" oncreate={m.route.link} class="nav-link"> 4 variables</a>
        </li>

        <li class="nav-item">
          <a href="/5" oncreate={m.route.link} class="nav-link"> 5 variables</a>
        </li>

        <li class="nav-item">
          <a href="/6" oncreate={m.route.link} class="nav-link"> 6 variables</a>
        </li>

        <li class="nav-item">
          <a href="/7" oncreate={m.route.link} class="nav-link"> 7 variables</a>
        </li>

        <li class="nav-item">
          <a href="/8" oncreate={m.route.link} class="nav-link"> 8 variables</a>
        </li>
      </ul>
    </nav>
  }
};

export default Navbar
