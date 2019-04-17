<template>
  <div class="sidebar">
    <div v-if="notes.length">
      <note v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
    <div class="sidebar__content" v-else>
      Boo, no notes. Get writing!
    </div>
    <div class="sidebar__content">
      <a href="" @click.prevent="clearNote">Start a new note</a>
    </div>
  </div>
</template>

<script>
import Note from './Note'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Note
  },
  computed: {
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'clearNote'
    ])
  }
}
</script>

<style lang="scss" scoped>
 .sidebar {
    background-color: #f9f9f9;
    flex: 1;
    height: 100%;
    min-width: 28%;
    border-right: 2px solid #eee;
    overflow-y: auto;

    &__content {
      padding: 30px;

      a {
          text-decoration: none;
          color: inherit;
      }
    }
 }
</style>
