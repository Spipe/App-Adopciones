<template>
  <v-footer
    dark
    height="auto">
    <v-card
      flat
      tile
      class="accent white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="social in sociales"
          :key="social.icono"
          class="mx-3 white--text"
          :href="social.href"
          icon>
          <v-icon size="24px">{{ social.icono }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>EPA</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'pie',
    data: () => ({
      sociales: [
        {
          icono: 'fab fa-facebook-f',
          href: "https://www.facebook.com/epauchile"
        },
        {
          icono: 'fab fa-instagram',
          href: "https://www.instagram.com/epa_antumapu/"
        }
      ]
    })
  }
</script>