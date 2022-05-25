import {acceptHMRUpdate, defineStore} from 'pinia'
import {v4 as uuidv4} from 'uuid'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 1,
                    content: 'If the element has any text, you can select the focused state and change its color. This also works for icons applied with mask-image; you can select the icon as a descendant of the focused element and change its background color, like the example button below.',
                },
                {
                    id: 2,
                    content: 'If the element has any text, you can select the focused state and change its color. This also works for icons applied with mask-image; you can select the icon as a descendant of the focused element and change its background color, like the example button below.',
                },
            ],
        }
    },
    actions: {
        addNote(newNoteContent) {
            let note = {
                id: uuidv4(),
                content: newNoteContent,
            }
            this.notes.unshift(note)
        },
        deleteNote(idDelete) {
            this.notes = this.notes.filter(note => {
                return note.id !== idDelete
            })
        },
    },
    getters: {},
})
// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
