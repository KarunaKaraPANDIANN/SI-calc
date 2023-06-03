<template>
 <div id="app">
    <header>
      <!-- Add your header content here -->
    </header>

    <main class="main-content">
      <router-view></router-view>
      <div><p>
        ‎                                                                                                                                         
        ‎     
        ‎ 
        ‎                                                                                                  
        ‎                                                                                                 
        ‎ 
        ‎ 
        ‎                                                                                           
      </p></div>
    </main>
    <footer>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/">
              <span class="nav-link nav-link-dashboard">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Borrowers">
              <span class="nav-link nav-link-borrowers">Borrowers</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Loans">
              <span class="nav-link nav-link-loantypes">LoanTypes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Settings">
              <span class="nav-link nav-link-settings">Settings</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style>



.nav {
  background: none;
  text-align: center;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  z-index: 1; /* Lower the z-index for the <nav> element */
  align-items: center;
}



.nav ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin: 0 10px;
}

.nav-link {
  color: #000;
  text-decoration: none;
  position: relative;
  font-size: 20px;
  padding: 10px 15px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.router-link-active {
  font-weight: bold;
}

.nav-link-dashboard {
  background-color: #E57373;
}

.nav-link-dashboard:hover {
  filter: drop-shadow(0 0 2em #E57373);
}

.nav-link-borrowers {
  background-color: #81C784;
}

.nav-link-borrowers:hover {
  filter: drop-shadow(0 0 2em #81C784);
}

.nav-link-loantypes {
  background-color: #64B5F6;
}

.nav-link-loantypes:hover {
  filter: drop-shadow(0 0 2em #64B5F6);
}

.nav-link-settings {
  background-color: #FFB74D;
}

.nav-link-settings:hover {
  filter: drop-shadow(0 0 2em #FFB74D);
}

/* Media Queries */
@media (max-width: 600px) {
  .nav ul {
    justify-content: center;
  }

  .nav li {
    margin: 0 5px;
  }

  .nav-link {
    font-size: 16px;
    padding: 8px 12px;
  }
}
</style>
