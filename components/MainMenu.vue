<template lang="pug">
  v-list(dense)
    v-list-item(v-for="(item, i) in items" :key="i" link :to="item.to" :href="item.href")
      v-list-item-action
        v-icon {{ item.icon }}
      v-list-item-content
        v-list-item-title {{ item.label }}
</template>

<script>
export default {
  data: () => ({
    items: [
      { to: '/', label: 'Home', icon: 'mdi-home' },
      { to: { name: 'posts' }, label: 'Shop talk', icon: 'mdi-post' },
      { to: { name: 'kids-math-addition' }, label: 'Math practice for kids', icon: 'mdi-school' },
      { to: { name: 'rpgs-dnd-encounter_calculator'}, label: '5e encounter calculator', icon: 'mdi-auto-fix' },
      { href: '/contact', label: 'Contact me', icon: 'mdi-email' }
    ]
  })
}
</script>
