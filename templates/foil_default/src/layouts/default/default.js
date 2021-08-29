import { defineComponent, ref } from 'vue'
import { useRoute } from "vue-router"

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const route = useRoute()

    return {
      route
    }
  }
})
