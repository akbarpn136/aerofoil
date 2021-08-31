import {api} from "boot/axios"

export async function foilAction (ctx, {sudut, koordinat}) {
  return api.post("flow/api/sdf", {
    sudut,
    coord: koordinat
  })
}
