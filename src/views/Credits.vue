<template>
  <v-row align="center">
    <v-btn to="/">Inicio</v-btn>
    <v-card
      class="mx-auto"
      max-width="400"
      tile
    >
      <v-list
        :disabled="disabled"
        :dense="dense"
        :two-line="twoLine"
        :three-line="threeLine"
        :shaped="shaped"
        :flat="flat"
        :subheader="subheader"
        :inactive="inactive"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-subheader>PROGRAMADORES</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-avatar v-if="avatar">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    item: 8,
    items: [
      {
        avatar: '../assets/avatar.jpg',
        title: 'Jaimerson'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Ítalo Gomes'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'João Paulo'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Pedro Paiva'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Bruno Cesar'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Denilson'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Péricles'
      },
      {
        avatar: '../assets/avatar.jpg',
        title: 'Daniel Oliveira'
      }
    ],
    disabled: false,
    dense: false,
    twoLine: false,
    threeLine: false,
    shaped: false,
    flat: false,
    subheader: false,
    inactive: false,
    subGroup: false,
    nav: true,
    avatar: true,
    rounded: false
  })
}
</script>
