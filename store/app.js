export const state = () => ({
  menu: {
    open: false,
    landingNavigation: [
      {
        route: '/',
        disabled: true,
        disabledTitle: 'coming soon',
        label: 'Launch APP',
      },
      {
        href: '/',
        label: 'Docs',
      },
      {
        href: '/',
        label: 'Github',
      },
      {
        href: '/',
        label: 'Medium',
      },
      {
        href: '/',
        label: 'Twitter',
      },
      {
        href: '/',
        label: 'Telegram',
      },
    ],
    navigation: [
      {
        route: 'logs',
        label: 'Logs',
      },
      {
        route: 'transfer',
        label: 'Transfer',
      },
    ],
    partners: [
      {
        href: '/',
        label: 'Graviton',
      },
      {
        href: '/',
        label: 'Gravity',
      },
    ],
    socials: [
      {
        href: '/',
        icon: 'mono/twitter',
      },
      {
        href: '/',
        icon: 'mono/medium',
      },
      {
        href: '/',
        icon: 'mono/github',
      },
      {
        href: '/',
        icon: 'mono/telegram',
      },
    ],
  },
  menuInterface: {
    open: false,
    landingNavigation: [
      {
        href: '/',
        main: true,
        label: 'Info',
      },
      {
        href: '/',
        label: 'About',
      },
      {
        href: '/',
        label: 'Analytics charts',
      },
      {
        href: '/',
        label: 'Twitter',
      },
      {
        href: '/',
        main: true,
        label: 'Resources',
      },
      {
        href: '/',
        label: 'Docs',
      },
      {
        href: '/',
        label: 'FAQ',
      },
      {
        href: '/',
        label: 'Blog',
      },
      {
        href: '/',
        label: 'Github',
      },

      {
        href: '/',
        main: true,
        label: 'Help',
      },

      {
        href: '/',
        label: 'Support',
      },
    ],
    navigation: [
      {
        route: 'About',
        label: 'About',
      },
      {
        route: 'Analytics-charts',
        label: 'Analytics charts',
      },
    ],
    partners: [
      {
        href: '/',
        label: 'Graviton',
      },
      {
        href: '/',
        label: 'Gravity',
      },
    ],
    socials: [
      {
        href: '/',
        icon: 'mono/twitter',
      },
      {
        href: '/',
        icon: 'mono/medium',
      },
      {
        href: '/',
        icon: 'mono/github',
      },
      {
        href: '/',
        icon: 'mono/telegram',
      },
    ],
  },
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu.open = !state.menu.open
  },
  TOGGLE_MENU_INTERFACE(state) {
    state.menuInterface.open = !state.menuInterface.open
  },
}

export const getters = {
    menu: (state) => state.menu,
  menuInterface: (state) => state.menuInterface,
}
