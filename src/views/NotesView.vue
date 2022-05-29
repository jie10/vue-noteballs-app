<script setup>
import {ref} from 'vue'
import Note from '../components/notes/note.vue'
import AddEditNote from '../components/notes/AddEditNote.vue'
import {useStoreNotes} from '../stores/storeNotes'

const storeNotes = useStoreNotes()

const newNotes = ref('')
const newRefNote = ref(null)

// add
const addNotes = () => {
  storeNotes.addNote(newNotes.value)
  newNotes.value = ''
  newRefNote.value.focus()
}

//clear
const clearNotes = () => {
  newNotes.value = null
  newRefNote.value.focus()
}
</script>

<template>
  <AddEditNote v-model="newNotes">
    <template #buttons>
      <button
          :disabled="!newNotes"
          class="inline-flex items-center mx-0.5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:bg-green-600 bg-green-500"
          type="button" @click="addNotes">
        Add Note
      </button>
      <button
          class="inline-flex items-center mx-0.5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:bg-indigo-600 bg-indigo-500"
          type="button" @click="clearNotes">
        Clear
      </button>
    </template>
  </AddEditNote>
  <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" class="my-3"/>

</template>

<style>
textarea {
  resize: none;
}
</style>