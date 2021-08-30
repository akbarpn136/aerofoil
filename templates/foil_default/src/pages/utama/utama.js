import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const airfoilForm = ref(null)
    const sudut = ref(0)
    const koordinat = ref("")

    const onProsesKoordinat = () => {
      airfoilForm.value.validate().then(success => {
        if (success) {
          console.log(sudut.value)
          console.log(koordinat.value)
        }
      })
    }

    const onResetKoordinat = () => {
      airfoilForm.value.resetValidation()
      sudut.value = 0
      koordinat.value = ""
    }

    return {
      sudut,
      koordinat,
      airfoilForm,
      onResetKoordinat,
      onProsesKoordinat
    }
  }
})
