export function foilMutation(state, {ori, sdf}) {
  state.foil.ori = ori
  state.foil.sdf = sdf
}

export function koleksiAirfoilMutation(state, {count, next, previous, results}) {
  state.koleksi.count = count
  state.koleksi.next = next
  state.koleksi.previous = previous

  results.forEach(item => {
    state.koleksi.results.push(item)
  })
}

export function resetKoleksiAirfoilMutation(state) {
  state.koleksi = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
}

export function namaAirfoilMutation(state, {count, next, previous, results}) {
  state.nama_airfoil.count = count
  state.nama_airfoil.next = next
  state.nama_airfoil.previous = previous

  results.forEach(item => {
    state.nama_airfoil.results.push(item)
  })
}

export function resetNamaAirfoilMutation(state) {
  state.nama_airfoil = {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
}
