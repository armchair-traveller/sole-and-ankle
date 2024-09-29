<script>
import Icon from '$lib/components/Icon.svelte'
import VisuallyHidden from '$lib/components/VisuallyHidden.svelte'
import { twMerge } from 'tailwind-merge'

let { label, class: className, ...delegated } = $props()
</script>

<label class="relative">
  <VisuallyHidden>Search</VisuallyHidden>
  <input
    class={twMerge(
      'border-b border-none border-b-gray-300 bg-transparent pl-6 text-sm text-gray-100 outline-offset-4 placeholder:text-gray-500',
      className,
    )}
    {...delegated}
    placeholder="Search…"
  />
  <Icon class="absolute inset-y-0 left-0 m-auto size-4" id="search" stroke-width={1} size={16} />
</label>
