<template>
  <div id="app">
    <header>
      <!-- Add your header content here -->
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <!-- Add your footer content here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
