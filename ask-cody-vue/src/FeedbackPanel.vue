<template>
<div class="feedback-window-main">
<a class="feedback-window-main--link" href = "http://bit.ly/csuFeedback-test">Feedback</a>
</div>

</template>

<style scoped lang="scss">
.feedback-window-main{
  width: 100%;
  height: 20px;
  background: #f4f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 10pt;
  text-align:center;
  font-style:italic;
  color: #565867;
}
.feedback-window-main--link {
    color: #717487;
    text-decoration: none;

}
.feedback-window-main--link:hover {
    color: #003767;

}

</style>
<script>
export default {
  colors: {
    type: Object,
    required: true
  }
}
</script>
