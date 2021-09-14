import {defineComponent, ref, onMounted} from "vue"
import {useStore} from "vuex"
import {koleksiAirfoilService} from "src/services/foil"

export default defineComponent({
  name: 'PageKoleksi',
  setup() {
    const koleksiAirfoil = ref({})
    const store = useStore()

    onMounted(async () => {
      await koleksiAirfoilService(store, {page: 1})
      koleksiAirfoil.value = store.getters["foil/koleksiAirfoilGetter"]
    })

    return {
      koleksiAirfoil
    }
  }
})
