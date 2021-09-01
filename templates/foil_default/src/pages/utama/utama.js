import {useStore} from "vuex"
import {defineComponent, ref} from 'vue'
import {foilService} from "src/services/foil"

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const store = useStore()
    const sudut = ref(0)
    const koordinat = ref("")
    const airfoilForm = ref(null)
    const tunjukGambar = ref(false)
    const gambarAirfoil = ref(null)

    const onProsesKoordinat = async () => {
      tunjukGambar.value = false

      const payload = {
        sudut: sudut.value,
        koordinat: koordinat.value
      }

      await foilService(airfoilForm, store, payload)
      tunjukGambar.value = true
      gambarAirfoil.value = store.getters["foil/foilGetter"]
    }

    const onResetKoordinat = () => {
      airfoilForm.value.resetValidation()
      sudut.value = 0
      koordinat.value = null
      tunjukGambar.value = false
    }

    return {
      sudut,
      koordinat,
      airfoilForm,
      tunjukGambar,
      gambarAirfoil,
      onResetKoordinat,
      onProsesKoordinat
    }
  }
})
