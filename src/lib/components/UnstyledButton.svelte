<script>
import { twMerge } from 'tailwind-merge'

let { class: className, children } = $props()
</script>

<button
  class={twMerge(
    'font-inherit color-inherit m-0 block cursor-pointer border-none bg-transparent p-0 text-left focus:outline-offset-2 [&:not(:focus-visible)]:focus:outline-none',
    className,
  )}
  >{@render children()}
</button>
