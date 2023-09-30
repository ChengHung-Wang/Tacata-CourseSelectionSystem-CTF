import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbar', () => {
    const itemColor = ref<string>("#ffffff");
    const brandColor = ref<string>("#d9ecff");
    return { itemColor, brandColor }
});
