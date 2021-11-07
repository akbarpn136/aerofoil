<template>
  <q-page>
     <div class="row items-center q-col-gutter-md q-mt-lg">
       <div class="col-12 col-md-3">
         <q-select outlined clearable dense
                   v-model="seleksiNamaAirfoil"
                   :options="pilihan_nama_airfoil"
                   :loading="loading_seleksi"
                   label="Kode Airfoil"
                   model-value=""
                   @virtual-scroll="onSelekScroll"
         />
       </div>

       <div class="col-12 col-md-3">
         <q-btn outline
                label="Hapus Plot"
                color="red"
                @click="hapusPlot"
         />
       </div>
     </div>

    <div class="q-mt-lg full-width" id="plotplot"></div>
    <div class="q-mt-lg full-width" id="plotplotcp"></div>

    <q-markup-table flat bordered class="q-my-lg">
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
          <th class="text-center">Cp</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr v-if="koleksiAirfoil.count === 0">
          <td class="text-center" colspan="8">Data belum ada</td>
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
          <td class="text-center">
            <q-btn outline color="black" label="Lihat" @click="onLihatCp(koleksi.id)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-dialog v-model="tunjukCp">
      <q-card style="width: 420px;">
        <q-bar>
          <q-icon name="eva-archive-outline" />
          <div>Distribusi Koefisien Tekanan</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>

          <q-markup-table separator="vertical">
            <thead>
              <tr>
                <th class="text-center">x</th>
                <th class="text-center">Cp</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in press" :key="p">
                <td class="text-center">{{ p.x }}</td>
                <td class="text-center">{{ p.cpi }}</td>
              </tr>
            </tbody>
          </q-markup-table>

        </q-card-section>
      </q-card>
    </q-dialog>

    <q-btn unelevated
           color="blue"
           label="Muat Data"
           class="q-mb-lg"
           v-if="koleksiAirfoil.next"
           @click="muatData"
    />
  </q-page>
</template>

<script src="./koleksi.js" />
