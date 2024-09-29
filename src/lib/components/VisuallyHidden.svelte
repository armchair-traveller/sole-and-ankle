<script>
import { dev } from '$app/environment'
import { onMount } from 'svelte'
import { twMerge } from 'tailwind-merge'

let { children, class: className, ...delegated } = $props()

let forceShow = $state(false)
onMount(() => {
  if (dev) {
    const handleKeyDown = (ev) => ev.key === 'Alt' && (forceShow = true)
    const handleKeyUp = () => (forceShow = false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keydown', handleKeyUp)
    }
  }
})
</script>

{#if forceShow}
  {@render children()}
{:else}
  <div
    class={twMerge(
      'absolute -m-px h-px w-px overflow-hidden border-0 p-0 [clip:rect(0_0_0_0)]',
      className,
    )}
    {...delegated}
  >
    {@render children()}
  </div>
{/if}
