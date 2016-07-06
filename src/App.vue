<template>
  <div id="app">
    <h1>{{ name | wrap 'Hello,' '!'}}</h1>
    <h3>Route path:{{$route.path | reverse }}</h3>
    <h3 v-if="!!$route.name">Route name:{{$route.name}}</h3>
    <p>
      <!-- use v-link directive for navigation. -->
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/hello' }">Go to Hello</a>
      <a v-link="{ path: '/grid' }">Go to Grid</a>
      <a v-link="{ path: '/tree-grid' }">Go to Grid</a>
      <a v-link="{ path: '/tree' }">Tree</a>
      <a v-link="{ path: '/modal' }">Modal</a>
      <a v-link="{ path: '/graph' }">SVG Graphic</a>
    </p>
    <!-- use router-view element as route outlet -->
    <router-view></router-view>
    <div v-demo:hello.a.b="msg"></div>
    <div>
      <p>Selected:{{selected}}</p>
      <select v-select = "selected" :option = "options">
        <option value = "0">default</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Richard',
        selected: 0,
        options: [
          { id: 1, text: 'hello' },
          { id: 2, text: 'what' }
        ]
      }
    },
    ready () {
      this.$http.get('')
    }
  }
</script>
