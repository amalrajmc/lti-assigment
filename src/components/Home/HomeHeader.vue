<template>
  <section class="hero">
    <div class="hero-body">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <h1 class="is-size-1">Simpsons Quotes</h1>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="field">
              <p class="control has-icons-left search-bar">
                <input
                  class="input search-bar__input"
                  type="text"
                  placeholder="Search Character"
                  :value="inputText"
                  @input="$emit('update:modelValue', $event.target.value)"
                  @compositionupdate="compositionUpdate($event)"
                />
                <span class="icon is-small is-left search-image-wrap">
                  <img
                    class="image"
                    src="https://img.icons8.com/ios-filled/20/2c3e50/search--v1.png"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["input-text"],
  emits: ["update:modelValue"],
  methods: {
    onChanged(e) {
      this.$emit("update:modelValue", e.currentTarget.value);
    },
        compositionUpdate: function(event)
    {
        this.inputText = event.data;
    },
  },
};
</script>
