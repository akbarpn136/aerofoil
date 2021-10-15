import {api} from "boot/axios"

export async function foilAction (ctx, {sudut, koordinat}) {
  return api.post("flow/api/sdf", {
    sudut,
    coord: koordinat
  })
}

export async function koleksiAirfoilAction (ctx, {page, airfoil, unik}) {
  return api.get("flow/api/koleksi", {
    params: {
      page: page ? page : 1,
      airfoil: airfoil ? airfoil : null,
      unik: unik ? unik : null,
    }
  })
}
