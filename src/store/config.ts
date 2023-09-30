import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', () => {
    const primaryColor = ref<string>("#1976d2");
    return { primaryColor }
});
