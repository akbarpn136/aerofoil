import {Notify} from "quasar"

export const foilService = async (form, store, {sudut, koordinat}) => {
  try {
    await form.value.validate()
    const res = await store.dispatch("foil/foilAction", {sudut, koordinat})

    store.commit("foil/foilMutation", {ori: res.data.data.ori, sdf: res.data.data.sdf, pred: res.data.data.pred})
  } catch (err) {
    let message

    if (err.response.data) {
      message = err.response.data.data
    }

    else {
      message = err.message
    }

    Notify.create({
      type: "negative",
      message: message
    })
  }
}

export const koleksiAirfoilService = async (store, {page, airfoil}) => {
  try {
    const res = await store.dispatch("foil/koleksiAirfoilAction", {page, airfoil})

    if (page === 1) store.commit("foil/resetKoleksiAirfoilMutation")

    store.commit("foil/koleksiAirfoilMutation", {
      count: res.data.count,
      next: res.data.next,
      previous: res.data.previous,
      results: res.data.results
    })
  } catch (err) {
    let message

    if (err.response.data) {
      message = err.response.data.data
    }

    else {
      message = err.message
    }

    Notify.create({
      type: "negative",
      message: message
    })
  }
}

export const namaAirfoilService = async (store, {page, unik}) => {
  try {
    const res = await store.dispatch("foil/koleksiAirfoilAction", {page, unik})

    if (page === 1) store.commit("foil/resetNamaAirfoilMutation")

    store.commit("foil/namaAirfoilMutation", {
      count: res.data.count,
      next: res.data.next,
      previous: res.data.previous,
      results: res.data.results
    })
  } catch (err) {
    let message

    if (err.response.data) {
      message = err.response.data.data
    }

    else {
      message = err.message
    }

    Notify.create({
      type: "negative",
      message: message
    })
  }
}
