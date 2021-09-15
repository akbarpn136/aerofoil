import {defineComponent, ref, onMounted} from "vue"
import {useStore} from "vuex"
import {koleksiAirfoilService} from "src/services/foil"

export default defineComponent({
  name: 'PageKoleksi',
  setup() {
    const koleksiAirfoil = ref({})
    const tunjukCp = ref(false)
    const press = ref({})
    const store = useStore()

    onMounted(async () => {
      await koleksiAirfoilService(store, {page: 1})
      koleksiAirfoil.value = store.getters["foil/koleksiAirfoilGetter"]
    })

    const onLihatCp = (id) => {
      tunjukCp.value = true
      press.value = koleksiAirfoil.value.results.filter(airfoil => airfoil.id === id)[0]
    }

    return {
      press,
      tunjukCp,
      koleksiAirfoil,
      onLihatCp
    }
  }
})
