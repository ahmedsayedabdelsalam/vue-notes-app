<template>
  <div class="pad">
    <input type="text" placeholder="Untitled note" class="pad__title" v-model="note.title" v-on:keydown="save">
    <textarea class="pad__text" placeholder="Start writing..." v-model="note.body" v-on:keydown="save"></textarea>

    <footer class="pad__footer">
      <ul class="pad__footer-items">
        <li class="pad__footer-item">words: {{ wordCount }}</li>
        <li class="pad__footer-item pad__footer-item--right">Last saved: {{ lastSaved }}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'note',
      'lastSaved',
      'wordCount'
    ])
  },
  methods: {
    ...mapActions([
      'saveNote',
      'startSaveTimeout'
    ]),
    save () {
      if (!this.note.id) {
        this.saveNote()
        // eslint-disable-next-line no-useless-return
        return
      }

      this.startSaveTimeout()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/placeholders';

  .pad {
    flex: 4;
    display: flex;
    flex-direction: column;

    &__title {
      border: 0;
      font: inherit;
      font-size: 1.6em;
      outline: none;
      padding: 20px;
      padding-left: 30px;
      padding-top: 25px;
      max-width: 100%
    }

    &__text {
      flex: 1;
      max-width: 100;
      margin: 0;
      padding: 20px 30px;
      border: 0;
      font:inherit;
      outline: none;
      resize: none;
      line-height: 2;

      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        #fff 5%,
        #fff 95%,
        transparent 100%
      );
    }

    &__footer {
      padding: 20px 30px;
    }
  }

  .pad__footer-items {
    @extend %inline-list
  }

  .pad__footer-item {
    flex: 1;
    font-size: 0.9em;

    &--right {
      margin-left: auto;
      text-align: right;
    }
  }
</style>
