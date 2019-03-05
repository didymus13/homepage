<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand href="/">StephaneDoiron.com</b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Kids">
          <b-dropdown-item :to="{name: 'kids-math-addition'}">Math Practice</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="RPGs">
          <b-dropdown-item :to="{name: 'rpgs-dnd-encounter_calculator'}">D&D 5th Encounter Calculator</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-starfinder-encounter_calculator'}">Starfinder Encounter Calculator</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-initiative'}">Initiative tracker</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-mythic'}">Mythic RPG FATE</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item :to="{name: 'hobbies-on-the-paint-table'}">On the paint table</b-nav-item>
      </b-navbar-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="https://www.github.com/didymus13"><span class="fab fa-fw fa-github"/></b-nav-item>
        <b-nav-item to="https://www.linkedin.com/in/stephane-doiron-88716932/"><span class="fab fa-fw fa-linkedin"/></b-nav-item>
        <b-nav-item to="https://twitter.com/sirdidymus"><span class="fab fa-fw fa-twitter"/></b-nav-item>
        <b-nav-item :to="{ name: 'contact' }"><span class="fas fa-fw fa-envelope"/></b-nav-item>
        <b-nav-item href="/contact"><span class="fas fa-fw fa-envelope"/></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
