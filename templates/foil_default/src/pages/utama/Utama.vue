<template>
  <q-page>
    <div class="text-center">
      <h3 class="overflow-hidden-y">Pencitraan Airfoil</h3>
    </div>

    <q-form
      ref="airfoilForm"
      @submit="onProsesKoordinat"
      @reset="onResetKoordinat"
    >
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-input outlined
                   color="red"
                   type="number"
                   model-value=""
                   v-model="sudut"
                   label="Sudut serang"
                   class="q-mb-md-none q-mb-xs-md"
          />
        </div>

        <div class="col-12 col-md-4">
          <q-btn unelevated
                 outline
                 type="reset"
                 color="grey"
                 label="Ulang"
                 class="full-width full-height text-black text-weight-bold"
                 @click="onResetKoordinat"
          />
        </div>

        <div class="col-12 col-md-4">
          <q-btn unelevated
                 type="submit"
                 color="primary"
                 label="Proses"
                 class="full-width full-height text-weight-bold"
                 @click="onProsesKoordinat"
          />
        </div>
      </div>

      <q-input
        outlined
        autogrow
        clearable
        lazy-rules
        color="red"
        model-value=""
        class="q-mb-lg"
        v-model="koordinat"
        :rules="[ val => val && val.length > 0 || 'Koordinat harus diisi.']"
        hint="Masing-masing titik koordinat airfoil dipisah dengan spasi untuk setiap baris."
      />
    </q-form>
  </q-page>
</template>

<script src="./utama.js" />
