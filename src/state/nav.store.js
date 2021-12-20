import { writable } from 'svelte/store'

export const nav = writable({
  currentRoute: 'users',
})
