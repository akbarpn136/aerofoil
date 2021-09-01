import { defineComponent, ref } from "vue"
import { openURL } from "quasar"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  name: "MainLayout",
  setup () {
    const route = useRoute()
    const router = useRouter()
    const informasi = ref(false)

    const gotoPage = async (name) => {
      await router.push({name})
    }

    const goToExternal = (name) => {
      if (name === "repo") name = process.env.SOURCE_CODE

      openURL(
        name,
        null,
        {
          noopener: true,
          noreferrer: true,
        }
      )
    }

    const tunjukInformasi = () => {
      informasi.value = true
    }

    return {
      route,
      informasi,
      gotoPage,
      goToExternal,
      tunjukInformasi
    }
  }
})
