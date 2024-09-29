<script>
import { twMerge } from 'tailwind-merge'

const link = 'font-medium text-gray-900 block leading-loose',
  activeLink = twMerge(link, 'text-primary')
</script>

<aside class="">
  <a class={link} href="/lifestyle">Lifestyle</a>
  <a class={link} href="/jordan">Jordan</a>
  <a class={activeLink} href="/running">Running</a>
  <a class={link} href="/basketball">Basketball</a>
  <a class={link} href="/training">Training &amp; Gym</a>
  <a class={link} href="/football">Football</a>
  <a class={link} href="/skateboarding">Skateboarding</a>
  <a class={link} href="/us-football">American Football</a>
  <a class={link} href="/baseball">Baseball</a>
  <a class={link} href="/golf">Golf</a>
  <a class={link} href="/tennis">Tennis</a>
  <a class={link} href="/athletics">Athletics</a>
  <a class={link} href="/walking">Walking</a>
</aside>
