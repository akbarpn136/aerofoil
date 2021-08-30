import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const route = useRoute()
    const router = useRouter()

    const gotoPage = async (name) => {
      await router.push({name})
    }

    return {
      route,
      gotoPage
    }
  }
})
