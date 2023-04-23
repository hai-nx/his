<template>
    <div class="container mt-3">
        <a-form>
            
        </a-form>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const branchs = ref([])

        return {
            branchs
        }
    }
});

</script>