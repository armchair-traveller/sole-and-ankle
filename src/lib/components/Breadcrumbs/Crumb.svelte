<script>
import { twMerge } from 'tailwind-merge'

let { href, children, class: className, ...delegated } = $props()
</script>

<div
  class="[&:not(:first-of-type)]:ml-2 [&:not(:first-of-type)]:before:mr-2 [&:not(:first-of-type)]:before:text-gray-300 [&:not(:first-of-type)]:before:content-['/']"
>
  <a class={twMerge('text-gray-700 hover:text-gray-900', className)} {href} {...delegated}>
    {@render children()}
  </a>
</div>
