<template>
  <nav class="navbar box p-3" id="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item has-text-weight-semibold">
        CPS 530 Project
      </p>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" @click="this.$router.push('/')">
            Home
          </a>

          <a class="navbar-item" @click="this.$router.push('/install')">
            Install
          </a>

          <a class="navbar-item" @click="this.$router.push('/tutorial')">
            Tutorial
          </a>

          <a class="navbar-item">
            Demo
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Developers
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" @click="this.$router.push('/conclusion')">
                Conclusion
              </a>
              <a class="navbar-item" @click="this.$router.push('/developers')">
                Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
