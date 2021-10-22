import {useStore} from "vuex"
import Plotly from "plotly.js-dist"
import {defineComponent, ref, onMounted, computed} from "vue"
import {koleksiAirfoilService, namaAirfoilService} from "src/services/foil"

export default defineComponent({
  name: 'PageKoleksi',
  components: {
    Plotly
  },
  setup() {
    const koleksiAirfoil = ref({})
    const tunjukCp = ref(false)
    const tunjukAero = ref(false)
    const press = ref({})
    const aeroKoef = ref({})
    const store = useStore()
    const nama_airfoil = ref("")
    const pilihan_nama_airfoil = ref([])
    const loading_seleksi = ref(false)
    const halaman_seleksi = ref(1)
    const lastPage_nama = ref(0)
    const counter_page = ref(1)
    const plot_config = {
      displaylogo: false,
      displayModeBar: false,
      responsive: true
    }
    const plot_layout = {
      showlegend: false,
      margin: {
        t: 15,
        b: -5,
        l: 50,
        r: 50
      },
      grid: {
        rows: 1,
        columns: 3,
        pattern: 'independent',
        roworder: 'bottom to top'
      },
      xaxis: {
        title: "alpha",
      },
      yaxis: {
        title: "cl",
      },
      xaxis2: {
        title: "alpha",
      },
      yaxis2: {
        title: "cd",
      },
      xaxis3: {
        title: "alpha",
      },
      yaxis3: {
        title: "cm",
      },
    }

    const seleksiNamaAirfoil = computed({
      get() {
        return nama_airfoil.value
      },
      async set(val) {
        nama_airfoil.value = val
        await koleksiAirfoilService(store, { page: 1, airfoil: val })
        koleksiAirfoil.value = store.getters["foil/koleksiAirfoilGetter"]

        if (val) await onLihatAero(val)
        else Plotly.purge("plotplot")
      }
    })

    onMounted(async () => {
      await koleksiAirfoilService(store, { page: 1 })
      koleksiAirfoil.value = store.getters["foil/koleksiAirfoilGetter"]

      await lihatNamaAirfoil(1)
    })

    const lihatNamaAirfoil = async (page) => {
      await namaAirfoilService(store, {page, unik: "1"})
      const koleksiNamaAirfoil = store.getters["foil/namaAirfoilGetter"]
      lastPage_nama.value = Math.ceil(koleksiNamaAirfoil.count / process.env.PAGE_SIZE)
      pilihan_nama_airfoil.value = koleksiNamaAirfoil["results"].map(val => {
        return val.nama
      })
    }

    const onSelekScroll = async (props) => {
      const lastIndex = pilihan_nama_airfoil.value.length - 1

      if (halaman_seleksi.value < lastPage_nama.value && props.to === lastIndex) {
        halaman_seleksi.value++
        await lihatNamaAirfoil(halaman_seleksi.value)
      }
    }

    const onLihatCp = (id) => {
      tunjukCp.value = true
      press.value = koleksiAirfoil.value.results.filter(airfoil => airfoil.id === id)[0]
    }

    const onLihatAero = async (nama) => {
      await koleksiAirfoilService(store, { page: 1, airfoil: nama })
      aeroKoef.value = store.getters["foil/koleksiAirfoilGetter"]

      const koef = aeroKoef.value["results"]
      const trace1 = {
        x: [],
        y: [],
        name: "cl",
        type: 'scatter'
      }

      const trace2 = {
        x: [],
        y: [],
        name: "cd",
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'scatter'
      }

      const trace3 = {
        x: [],
        y: [],
        name: "cm",
        xaxis: 'x3',
        yaxis: 'y3',
        type: 'scatter'
      }

      koef.forEach(k => {
        trace1.x.push(k["alpha"])
        trace2.x.push(k["alpha"])
        trace3.x.push(k["alpha"])

        trace1.y.push(k["cl"])
        trace2.y.push(k["cd"])
        trace3.y.push(k["cm"])
      })

      const data = [trace1, trace2, trace3]

      Plotly.newPlot('plotplot', data, plot_layout, plot_config)
    }

    const muatData = async () => {
      counter_page.value += 1
      await koleksiAirfoilService(store, { page: counter_page.value })
      koleksiAirfoil.value = store.getters["foil/koleksiAirfoilGetter"]
    }

    return {
      press,
      tunjukCp,
      aeroKoef,
      tunjukAero,
      nama_airfoil,
      koleksiAirfoil,
      loading_seleksi,
      seleksiNamaAirfoil,
      pilihan_nama_airfoil,
      muatData,
      onLihatCp,
      onLihatAero,
      onSelekScroll
    }
  }
})
