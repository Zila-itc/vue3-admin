import { defineStore } from 'pinia'

export const useTestStore = defineStore({
  id: 'test',
  state: () => ({
    counter: 1,
  }),
  getters: {
    getCounter: state => state.counter,
  },
  actions: {
    increaseCount(by = 1) {
      this.counter = this.counter + by
    },
  },
})
