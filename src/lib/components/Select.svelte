<script>
import Icon from '$lib/components/Icon.svelte'
import { twMerge } from 'tailwind-merge'

let { label, value = $bindable(), children, class: className, ...delegated } = $props()

let selectEl = $state(),
  displayedValue = $derived(
    value && selectEl && [...selectEl.options].find((option) => option.value == value).textContent,
  )
</script>

<label class="">
  <span class="mr-4 text-gray-700">{label}</span>

  <div class="relative">
    <select
      class={twMerge('peer absolute inset-0 size-full cursor-pointer opacity-0', className)}
      {...delegated}
      bind:this={selectEl}
      bind:value
    >
      {@render children()}
    </select>

    <span
      class="peer-focus:outline-[1px_dotted_#212121 pointer-events-none block rounded-lg bg-gray-100 py-3 pl-4 pr-[42px] font-medium text-gray-900 peer-focus:outline-[5px_auto_-webkit-focus-ring-color]"
    >
      {displayedValue}
      <Icon
        class="absolute inset-y-0 right-[9px] m-auto size-6"
        id="chevron-down"
        size={24}
        stroke-width={1.5}
      />
    </span>
  </div>
</label>
