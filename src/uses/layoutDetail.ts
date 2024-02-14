import { ref } from "vue"
import { XItemType } from "@/components"

function loadSource () {
    console.log("load source")
}

function initData(refType: number) {
    console.log("load source")
}

export default function useLayoutDetail (locateLoadSource = loadSource) {
    const title = ref("");
    const breadcrumbs = ref<Array<XItemType>>([]);

    return {
        title,
        breadcrumbs,

        ref,

        initData,
        locateLoadSource
    }
}