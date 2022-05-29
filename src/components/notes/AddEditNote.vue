<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="bg-white shadow p-8 my-5 mx-auto lg:max-w-2xl">
    <div class="flex flex-col mb-1">
      <label class="block text-sm font-bold text-gray-700" for="comment">Note</label>
      <div class="mt-1">
        <textarea ref="newRefNote"
                  v-model="modelValue"
                  class="hover:shadow-xl focus:shadow-xl p-3 focus:ring-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-lg"
                  placeholder="Add new note"
                  rows="4" @input="$emit('update:modelValue', modelValue)"/>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <slot name="buttons"/>
      <!--      <button-->
      <!--          class="inline-flex items-center mx-0.5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:bg-green-600 bg-green-500"-->
      <!--          type="button">-->
      <!--        Add Note-->
      <!--      </button>-->
      <!--      <button-->
      <!--          class="inline-flex items-center mx-0.5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:bg-indigo-600 bg-indigo-500"-->
      <!--          type="button" @click="clearNotes">-->
      <!--        Clear-->
      <!--      </button>-->
    </div>
  </div>
</template>

<style>

</style>