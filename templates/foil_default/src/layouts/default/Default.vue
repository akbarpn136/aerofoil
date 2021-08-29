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
            @click="gotoPage('informasi')"
          >
            <q-tooltip class="bg-red text-uppercase" :offset="[10, 10]">
              Informasi
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="./default.js" />
