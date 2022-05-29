<script setup>
import {useStoreNotes} from '../../stores/storeNotes'
import {RouterLink} from 'vue-router'

const storeNotes = useStoreNotes()
const props = defineProps(['note'])

</script>

<template>
  <ul class="space-y-3" role="list">
    <li
        class="bg-white shadow overflow-hidden max-w-3xl mx-auto rounded-md px-6 py-4">
      {{ note.content }}
      <div class="border-t mt-4">
        <div class="flex justify-center">
          <RouterLink :to="`/edit-note/${note.id}`" class="font-bold text-center w-full mt-1 p-3">Edit</RouterLink>
          <button class="font-bold w-full mt-1 p-3" @click.prevent="storeNotes.deleteNote(note.id)">Delete</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<style>

</style>