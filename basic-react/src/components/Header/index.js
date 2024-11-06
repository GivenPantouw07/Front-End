const Header = () => {
  return (
    <header class="site-header reveal-from-bottom">
      <div class="container">
        <div class="site-header-inner">
          <div class="brand">
            <h1 class="m-0">
              <a href="index.html">
                <img src="images/logo.svg" alt="Cube" width="32" height="32" />
              </a>
            </h1>
          </div>
          <button
            id="header-nav-toggle"
            class="header-nav-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span class="screen-reader">Menu</span>
            <span class="hamburger">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <nav id="header-nav" class="header-nav">
            <div class="header-nav-inner">
              <ul class="list-reset text-xxs header-nav-right">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Showcase</a>
                </li>
              </ul>
              <ul class="list-reset header-nav-right">
                <li>
                  <a
                    class="
												button
												button-primary
												button-wide-mobile
												button-sm
											"
                    href="#"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
