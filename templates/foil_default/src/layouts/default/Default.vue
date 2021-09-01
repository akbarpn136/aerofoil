<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="shadow-1">
      <q-toolbar class="bg-black">
        <q-toolbar-title class="text-amber text-weight-bold">
          AEROFOIL
        </q-toolbar-title>

        <div class="q-gutter-md">
          <q-btn
            flat
            dense
            round
            :color="route.name === 'utama' ? 'amber' : 'white'"
            icon="eva-paper-plane-outline"
            aria-label="Utama"
            @click="gotoPage('utama')"
          >
            <q-tooltip class="bg-red text-uppercase" :offset="[10, 10]">
              Utama
            </q-tooltip>
          </q-btn>

          <q-btn
            flat
            dense
            round
            :color="route.name === 'koleksi' ? 'amber' : 'white'"
            icon="eva-layers-outline"
            aria-label="Koleksi"
            @click="gotoPage('koleksi')"
          >
            <q-tooltip class="bg-red text-uppercase" :offset="[10, 10]">
              Koleksi
            </q-tooltip>
          </q-btn>

          <q-btn
            flat
            dense
            round
            :color="route.name === 'informasi' ? 'amber' : 'white'"
            icon="eva-info-outline"
            aria-label="informasi"
            @click="tunjukInformasi"
          >
            <q-tooltip class="bg-red text-uppercase" :offset="[10, 10]">
              Informasi
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="row justify-center">
      <router-view class="col-7" />
    </q-page-container>

    <q-dialog v-model="informasi" persistent>
      <q-card>
        <q-bar class="bg-amber">
          <div class="">💡 Informasi Aerofoil</div>

          <q-space />

          <q-btn dense flat icon="eva-close-outline" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          Aplikasi Aerofoil ✈️ dikembangkan dengan sepenuh ❤️ memanfaatkan teknologi <i>Open Source</i> untuk mendukung
          riset tentang <b>Prediksi Distribusi Tekanan Udara di Permukaan Airfoil dengan Variasi Sudut Serang melalui
          Convolutional Neural Network</b>.🤖
        </q-card-section>

        <q-card-section>
          <q-btn unelevated color="primary"
                 label="Source Code"
                 @click="goToExternal('repo')"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script src="./default.js" />
