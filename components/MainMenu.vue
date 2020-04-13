<template>
  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"/>

    <b-navbar-brand :to="{ name: 'index' }">StephaneDoiron.com</b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item :to="{ name: 'posts' }">Shop Talk</b-nav-item>

        <b-nav-text>Web apps:</b-nav-text>

        <b-nav-item-dropdown text="For kids">
          <b-dropdown-item :to="{name: 'kids-math-addition'}">Math Practice</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="RPGs">
          <b-dropdown-item :to="{name: 'rpgs-dnd-encounter_calculator'}">D&D 5th Encounter Calculator</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-pf2-encounter-calculator'}">Pathfinder 2nd Encounter Calculator</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-starfinder-encounter_calculator'}">Starfinder Encounter Calculator</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-initiative'}">Initiative tracker</b-dropdown-item>
          <b-dropdown-item :to="{name: 'rpgs-mythic'}">Mythic RPG FATE</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Hobbies">
          <b-dropdown-item href="/hobbies/on-the-paint-table">On the paint table</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://www.github.com/didymus13"><span class="fab fa-fw fa-github"/></b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/stephane-doiron-88716932/"><span class="fab fa-fw fa-linkedin"/></b-nav-item>
        <b-nav-item href="https://twitter.com/sirdidymus"><span class="fab fa-fw fa-twitter"/></b-nav-item>
        <b-nav-item href="/contact"><span class="fas fa-fw fa-envelope"/></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
