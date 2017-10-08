import m from 'mithril';

let Navbar = {
  view(){
    return <nav>
      <ul class="nav">
        <li class="nav-item">
          <a href="/KmapSolver/2" oncreate={m.route.link} class="nav-link"> 2 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/3" oncreate={m.route.link} class="nav-link"> 3 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/4" oncreate={m.route.link} class="nav-link"> 4 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/5" oncreate={m.route.link} class="nav-link"> 5 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/6" oncreate={m.route.link} class="nav-link"> 6 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/7" oncreate={m.route.link} class="nav-link"> 7 variables</a>
        </li>

        <li class="nav-item">
          <a href="/KmapSolver/8" oncreate={m.route.link} class="nav-link"> 8 variables</a>
        </li>
      </ul>
    </nav>
  }
};

export default Navbar
