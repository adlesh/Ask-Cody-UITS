<template>
  <div>
    <Suggestions :suggestions="suggestions" v-on:sendSuggestion="_submitSuggestion" :colors="colors"/>
    <div v-if="file" class='file-container' :style="{backgroundColor: colors.userInput.text, color: colors.userInput.bg}">
      <span class='icon-file-message'><img src="./assets/file.svg" alt='genericFileIcon' height="15" /></span>
      {{file.name}}
      <span class='delete-file-message' @click="cancelFile()" ><img src="./assets/close.svg" alt='close icon' height="10" title='Remove the file' /></span>
    </div>
    <form class="sc-user-input" :class="{active: inputActive}" :style="{background: colors.userInput.bg}">
      <div
        role="button"
        tabIndex="0"
        @focus="setInputActive(true)"
        @blur="setInputActive(false)"
        @keydown="handleKey"
        contentEditable="true"
        :placeholder="placeholder"
        class="sc-user-input--text"
        ref="userInput"
        :style="{color: colors.userInput.text}"
      >
      </div>
      <div class="sc-user-input--buttons">
        <div class="sc-user-input--button"></div>
        <!--div v-if="showEmoji" class="sc-user-input--button">
          <EmojiIcon :onEmojiPicked="_handleEmojiPicked" :color="colors.userInput.text" />
        </div>
        <div v-if="showFile" class="sc-user-input--button">
          <FileIcons :onChange="_handleFileSubmit" :color="colors.userInput.text" />
        </div-->
        <div class="sc-user-input--button">
          <SendIcon :onClick="_submitText" :color="colors.userInput.text" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import EmojiIcon from './EmojiIcon.vue'
import FileIcons from './FileIcons.vue'
import SendIcon from './SendIcon.vue'
import Suggestions from './Suggestions.vue'

export default {
  components: {
    EmojiIcon,
    FileIcons,
    SendIcon,
    Suggestions
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: () => false
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => false
    },
    onSubmit: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Write a reply'
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      file: null,
      inputActive: false
    }
  },
  methods: {
    cancelFile () {
      this.file = null
    },
    setInputActive (onoff) {
      this.inputActive = onoff
    },
    handleKey (event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this._submitText(event)
        event.preventDefault()
      }
    },
    _submitSuggestion (suggestion) {
      this.onSubmit({author: 'me', type: 'text', data: { text: suggestion }})
    },
    _submitText (event) {
      const text = this.$refs.userInput.textContent
      const file = this.file
      if (file) {
        if (text && text.length > 0) {
          this.onSubmit({
            author: 'me',
            type: 'file',
            data: { text, file }
          })
          this.file = null
          this.$refs.userInput.innerHTML = ''
        } else {
          this.onSubmit({
            author: 'me',
            type: 'file',
            data: { file }
          })
          this.file = null
        }
      } else {
        if (text && text.length > 0) {
          this.onSubmit({
            author: 'me',
            type: 'text',
            data: { text }
          })
          this.$refs.userInput.innerHTML = ''
        }
      }
    },
    _handleEmojiPicked (emoji) {
      this.onSubmit({
        author: 'me',
        type: 'emoji',
        data: { emoji }
      })
    },
    _handleFileSubmit (file) {
      this.file = file
    }
  }
}
</script>

<style lang="scss" src="./styles/scss/UserInput.scss"></style
