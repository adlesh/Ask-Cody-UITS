# Vue-Beauitful-Chat Library
> A simple and beautiful Vue chat component designed to be backend agnostic, fully customisable and extendable.

[See their Github here](https://github.com/mattmezza/vue-beautiful-chat)

## Finding Your Way...
### ask-cody-vue/src/
> This is where the library's code resides. It is the actual implementation of the chat window and launcher. Thus, this is where changes to the actual function of the chat window need to be made.

Component | Description
----------|------------
ChatWindow.vue | The full window that users will see and interact with. Combines many of the other Vue files defined in this folder; such as: *Header.vue, MessageList.vue, UserInput.vue*
FeedbackPanel.vue | Creates a Panel that currently holds a link to the feedback form for users to submit a review of their experience
Header.vue | The header of the ChatWindow; currently displays Clock Tower icon and project's working title 'AskCody'. Also contains a button as an option to close the window.
Launcher.vue | The button that should be visible on main page. It is used to open and close the chat window.
Message.vue | Determines which user sent the message, what type of message was sent, and how it should be displayed. The library supports the following types of messages: TextMessage, SystemMessage, TypingMessage[?], EmojiMessage[!], FileMessage[!]
UserInput.vue | Handles user input and prepares messages to be pushed out.

### src/assets/
> Different resources like images, icons, etc. for use within the chat window itself.
<p>
! indicates currently unused or disabled in AskCody <br> ? indicates may be disabled after further discussion 
</p>
