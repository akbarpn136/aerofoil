<template>
  <q-page>
    <div class="text-center text-uppercase">
      <h3 class="overflow-hidden-y">Pencitraan Airfoil</h3>
    </div>

    <div class="q-col-gutter-md row items-start q-mb-md" v-if="tunjukGambar">
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <img :src="`data:image/png;base64,${gambarAirfoil.ori}`"
               alt="ori airfoil"
          />

          <q-card-section class="q-pt-none">
            <div class="text-h6 text-center">ORI</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <img :src="`data:image/png;base64,${gambarAirfoil.sdf}`"
               alt="sdf airfoil"
          />

          <q-card-section class="q-pt-none">
            <div class="text-h6 text-center">SDF</div>
          </q-card-section>
        </q-card>
      </div>
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
                   label="Sudut Serang"
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
          />
        </div>

        <div class="col-12 col-md-4">
          <q-btn unelevated
                 type="submit"
                 color="primary"
                 label="Proses"
                 class="full-width full-height text-weight-bold"
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
