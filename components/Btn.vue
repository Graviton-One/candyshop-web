<template>
  <component :is="tag"
             class="btn"
             :disabled="disabled"
             :class="{
              'btn--lg': size === 'large',
              'btn--md': size === 'medium',
              'btn--sm': size === 'small',
              'btn--gradient': variant === 'gradient',
              'btn--empty': variant === 'empty',
              'btn--dark-charcoal': variant === 'dark-charcoal',
              'btn--rounded': rounded,
              'btn--square': square,
              'btn--block': block,
              'btn--disabled': disabled,
              'btn--readonly': readonly,
             }"
               @click="$emit('click', $event)"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: (value) => ['large', 'medium', 'small'].includes(value),
      default: 'medium'
    },
    variant: {
      type: String,
      validator: (value) => ['gradient', 'empty', 'dark-charcoal'].includes(value),
      default: 'blood'
    },
  }
})
</script>

<style lang="postcss">
.btn {
  @apply inline-block text-center rounded-[6px]  text-[13px] text-white font-bold align-middle transition-all;
}

.btn--lg {
  @apply h-[56px] leading-[56px];

  &.btn--square {
    @apply w-[56px] min-w-[56px];
  }
}

.btn--md {
  @apply h-[42px] leading-[42px];

  &.btn--square {
    @apply w-[42px] min-w-[42px];
  }
}

.btn--sm {
  @apply h-[30px] leading-[30px];

  &.btn--square {
    @apply w-[30px] min-w-[30px];
  }
}

.btn--gradient {
  background: linear-gradient(260.18deg, #FB2EFF 24.15%, #7736FF 59.59%);
}
.btn--empty {
  @apply border-[1px] border-[#D9DCE2] rounded-[23px] text-[#12161D] text-opacity-50 text-[13px] text-center align-middle;
}

.btn--rounded {
  @apply rounded-full;
}

.btn--block {
  @apply w-full block;
}

.btn--disabled {
  @apply pointer-events-none opacity-50;
}

.btn--readonly{
  @apply cursor-default;
}

</style>
