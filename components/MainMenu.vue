<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand href="/">StephaneDoiron.com</b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Kids">
          <b-dropdown-item :to="{name: 'kids-math-addition'}">Math Practice</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="D&D 5th">
          <b-dropdown-item :to="{name: 'rpgs-dnd-encounter_calculator'}">YAEC</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Starfinder">
          <b-dropdown-item :to="{name: 'rpgs-starfinder-encounter_calculator'}">YASEC</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->

    </b-collapse>
  </b-navbar>
</template>
