<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {<!--index.vue  父组件 数据接口在default中-->
<template>
    <Menu width="auto"
        theme="dark"
        :active-name="activeName"
        :open-names="openNames"
        @on-select="handleSelect"
        :accordion="true"
    >

      <template v-for="(item,index) in items">
        <side-menu-item
            v-if="item.children&&item.children.length!==0"
            :parent-item="item"
            :name="index+''"
            :index="index"
        >
        </side-menu-item>
        <menu-item v-else
            :name="index+''"
            :to="item.path"
        >
            <Icon :type="item.icon" :size="15"/>
            <span>{{ item.title }}</span>
        </menu-item>
      </template>
    </Menu>
</template>

<script>
import sideMenuItem from '@/components/Menu/side-menu-item.vue'
export default {
    name: 'sideMenu',
    props: {
        activeName: {
            type: String,
            default: 'auth'
        },
        openNames: {
            type: Array,
            default: () => [
                'other',
                'role',
                'auth'
            ]
        },
        items: {
            type: Array,
            default: () => [
                {
                    name : 'system',
                    title : '数据看板',
                    icon : 'ios-analytics',
                    children: [
                        { name : 'user', title : '用户管理', icon : 'outlet',
                          children : [
                                { name : 'auth', title : '权限管理1', icon : 'outlet' },
                                { name : 'auth', title : '权限管理', icon : 'outlet',
                                  children:[
                                    { name : '334', title : '子菜单', icon : 'outlet' },
                                    { name : '453', title : '子菜单', icon : 'outlet' }
                                  ]
                                }
                            ]
                         }
                    ]
                },
                {
                    name : 'other',
                    title: '其他管理',
                    icon : 'outlet',
                }
            ]
        }
    },
    components: {
        sideMenuItem
    },
    methods: {
        handleSelect(name) {
           this.$emit('on-select', name)
        }
    }
}
</script>

      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
