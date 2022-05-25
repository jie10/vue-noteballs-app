<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6"/>
            <XIcon v-else aria-hidden="true" class="block h-6 w-6"/>
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex-shrink-0 flex items-center">
            <img alt="Workflow" class="block lg:hidden h-8 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
            <img alt="Workflow"
                 class="hidden lg:block h-8 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"/>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <RouterLink
                class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                to="/">
              Notes
            </RouterLink>
            <RouterLink
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                to="/stats">
              Team
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <RouterLink as="a"
                    class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    to="/">
          Note
        </RouterLink>
        <RouterLink as="a"
                    class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    to="/stats">
          Stats
        </RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <RouterView/>
</template>

<style>

</style>