<script>
import { twMerge } from 'tailwind-merge'

let { class: className, ...delegated } = $props()
</script>

<a class="text-inherit" href="/">
  <h1 class={twMerge('text-2xl font-extrabold', className)} {...delegated}>Sole&amp;Ankle</h1>
</a>
