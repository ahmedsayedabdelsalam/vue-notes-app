<template>
  <div class="sidebar">
    <note/>
    <note/>
    <note/>
 

    <!-- <div class="siebar__content">
      <a href="">Start new note</a>
    </div> -->
  </div>
</template>

<script>
import Note from './Note'

export default {
  components: {
    Note
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
