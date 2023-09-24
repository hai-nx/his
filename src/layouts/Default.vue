<template>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { XItemType } from '@/components';

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        const items = ref<Array<XItemType>>([
            {
                key: "1", label: "item 1", path: "", children: [
                    {
                        key: "1.1", label: "item 1.1", path: "", children: [
                            {
                                key: "1.1.1", label: "item 1.1.1", path: "", children: [
                                    {
                                        key: "1.1.1.1", label: "item 1.1.1.1", path: ""
                                    },
                                    {
                                        key: "1.1.1.2", label: "item 1.1.1.2", path: ""
                                    },
                                    {
                                        key: "1.1.1.3", label: "item 1.1.1.3", path: ""
                                    },
                                    {
                                        key: "1.1.1.4", label: "item 1.1.1.4", path: ""
                                    }
                                ]
                            },
                            {
                                key: "1.1.2", label: "item 1.1.2", path: ""
                            }
                        ]
                    },
                    {
                        key: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.3", label: "item 1.3", path: "", children: [
                            {
                                key: "1.3.1", label: "item 1.3.1", path: ""
                            }
                        ]
                    },
                    {
                        key: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.4", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.5", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.6", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.7", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.8", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.9", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.10", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "2", label: "item 2", path: "", children: [
                    {
                        key: "2.1", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "3", label: "item 2", path: "", children: [
                    {
                        key: "3.1", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "4", label: "item 2", path: "", children: []
            },
            {
                key: "5", label: "item 2", path: "", children: []
            },
            {
                key: "6", label: "item 2", path: "", children: []
            }
        ]);

        return {
            items
        }
    }
});
</script>