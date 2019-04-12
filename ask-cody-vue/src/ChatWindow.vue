<template>
  <div class="sc-chat-window" :class="{opened: isOpen, closed: !isOpen}">
    <Header
      :title="title"
      :imageUrl="titleImageUrl"
      :onClose="onClose"
      :colors="colors"
    />
    <MessageList
      v-if="!showUserList"
      :messages="messages"
      :participants="participants"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
    />
    <UserInput
      v-if="!showUserList"
      :onSubmit="onUserInputSubmit"
      :suggestions="getSuggestions()"
      :placeholder="placeholder"
      :colors="colors"
      @response="onBotResponse" />
    <FeedbackPanel
      v-if="!showUserList"
      :colors="colors" />                   
  </div>
</template>

<script>
import FeedbackPanel from './FeedbackPanel.vue'
import Header from './Header.vue'
import MessageList from './MessageList.vue'
import UserInput from './UserInput.vue'
import UserList from './UserList.vue'

export default {
  components: {
    Header,
    MessageList,
    UserInput,
    FeedbackPanel
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: 'Write a reply'
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      showUserList: false
    }
  },
  computed: {
    messages () {
      let messages = this.messageList

      return messages
    }
  },
  methods: {
    created() {
      
    },
    onBotResponse: function (text) {
        this.messageList.push({
                                    data: {text},
                                    author: 'cody',
                                    type: 'text'
                                })
    },
    handleUserListToggle (showUserList) {
      this.showUserList = showUserList
    },
    getSuggestions () {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
    }
  }
}
</script>
<style scoped lang="scss" >
.sc-chat-window {
  width: 99%;
  height: calc(100% - 120px);
  max-height: 430px;
  max-width: 320px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.1);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}

.sc-chat-window.closed {
  opacity: 0;
  visibility: hidden;
  bottom: 90px;
}

.sc-message--me {
  text-align: right;
  border: 5px;
  border-color: #000;
}
.sc-message--them {
  text-align: left;
  border: 5px;
  border-color: #000;
  border-width: 10px;
}

@media (max-width: 320px) {
  .sc-chat-window {
    width: 99%;
    height: calc(100% - 120px);
    max-height: 430px;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
  }
  .sc-chat-window {
    transition: 0.1s ease-in-out;
  }
  .sc-chat-window.closed {
    bottom: 0px;
  }
}

</style>
