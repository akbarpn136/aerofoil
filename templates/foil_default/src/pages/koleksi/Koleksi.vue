<template>
  <q-page>
    <q-markup-table flat bordered class="q-mt-lg">
      <thead class="bg-green-5">
        <tr>
          <th colspan="8">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white text-uppercase">Daftar Airfoil</div>
            </div>
          </th>
        </tr>
        <tr class="text-white">
          <th class="text-center">Gambar</th>
          <th class="text-left">Nama</th>
          <th class="text-center">Re</th>
          <th class="text-center">
            Alpha <span class="text-weight-bold" style="font-size: large">&deg;</span>
          </th>
          <th class="text-center">Cl</th>
          <th class="text-center">Cd</th>
          <th class="text-center">Cm</th>
          <th class="text-right">Cp</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr v-if="koleksiAirfoil.count === 0">
          <td class="text-center" colspan="7">Data belum ada</td>
        </tr>
        <tr v-for="koleksi in koleksiAirfoil.results"
            :key="koleksi.id"
            v-else
        >
          <td class="text-left">
            <q-img
              :src="koleksi.sdf"
              :ratio="1"
            />
          </td>
          <td class="text-left">{{ koleksi.nama }}</td>
          <td class="text-center">{{ koleksi.re }}</td>
          <td class="text-center">{{ koleksi.alpha }}</td>
          <td class="text-center">{{ koleksi.cl }}</td>
          <td class="text-center">{{ koleksi.cd }}</td>
          <td class="text-center">{{ koleksi.cm }}</td>
          <td class="text-right">
            upper: {{ koleksi.cp_upper }} <br />
            lower: {{ koleksi.cp_lower }}
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-btn unelevated
           color="blue"
           label="Muat Data"
           class="q-my-lg"
           v-if="koleksiAirfoil.next"
    />
  </q-page>
</template>

<script src="./koleksi.js" />
