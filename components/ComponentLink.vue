<template>
  <component
    :is="
      route
        ? $route.name === route || disabled
          ? 'span'
          : 'nuxt-link'
        : disabled
        ? 'span'
        : 'a'
    "
    v-bind="{ [route ? 'to' : 'href']: route ? { name: route } : href }"

    :class="[disabled ? 'relative hover:no-underline' : '']">
    <span
      v-if="disabled && disabledTitle"
      class="
        absolute
        top-0
        left-[50%]
        translate-x-[-50%] translate-y-[-100%]
        px-[10px]
        py-[6px]
        text-[8px]
        leading-[6px]
        tracking-widest
        whitespace-nowrap
        border border-white
        rounded-full
      "
    >
      {{ disabledTitle }}
    </span>

    <span :class="disabled ? 'opacity-50' : ''">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    route: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledTitle: {
      type: String,
      default: '',
    },
  },
})
</script>
