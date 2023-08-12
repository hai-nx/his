<template>
    <!-- <v-nav :items="items"></v-nav> -->
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// import { VNav } from "@/components"
import { NavItem } from '@/components/data';

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        // VNav
    },
    setup() {
        const items = ref<Array<NavItem>>([
            {
                id: "1", label: "item 1", path: "", children: [
                    {
                        id: "1.1", label: "item 1.1", path: "", children: [
                            {
                                id: "1.1.1", label: "item 1.1.1", path: "", children: [
                                    {
                                        id: "1.1.1.1", label: "item 1.1.1.1", path: ""
                                    },
                                    {
                                        id: "1.1.1.2", label: "item 1.1.1.2", path: ""
                                    },
                                    {
                                        id: "1.1.1.3", label: "item 1.1.1.3", path: ""
                                    },
                                    {
                                        id: "1.1.1.4", label: "item 1.1.1.4", path: ""
                                    }
                                ]
                            },
                            {
                                id: "1.1.2", label: "item 1.1.2", path: ""
                            }
                        ]
                    },
                    {
                        id: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.3", label: "item 1.3", path: "", children: [
                            {
                                id: "1.3.1", label: "item 1.3.1", path: ""
                            }
                        ]
                    },
                    {
                        id: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.3", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.4", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.5", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.6", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.7", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.8", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.9", label: "item 1.2", path: ""
                    },
                    {
                        id: "1.10", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                id: "2", label: "item 2", path: "", children: [
                    {
                        id: "2.1", label: "item 1.2", path: ""
                    },
                    {
                        id: "2.2", label: "item 1.2", path: ""
                    },
                    {
                        id: "2.3", label: "item 1.2", path: ""
                    },
                    {
                        id: "2.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                id: "3", label: "item 2", path: "", children: [
                    {
                        id: "3.1", label: "item 1.2", path: ""
                    },
                    {
                        id: "3.2", label: "item 1.2", path: ""
                    },
                    {
                        id: "3.3", label: "item 1.2", path: ""
                    },
                    {
                        id: "3.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                id: "4", label: "item 2", path: "", children: []
            },
            {
                id: "5", label: "item 2", path: "", children: []
            },
            {
                id: "6", label: "item 2", path: "", children: []
            }
        ]);

        return {
            items
        }
    }
});
</script>@/components/V