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
        href: '#',
        label: 'Docs',
      },
      {
        href: '#',
        label: 'Github',
      },
      {
        href: '#',
        label: 'Medium',
      },
      {
        href: '#',
        label: 'Twitter',
      },
      {
        href: '#',
        label: 'Telegram',
      },
    ],
    navigation: [
      {
        route: 'shop',
        label: 'Logs',
      },
      {
        route: 'product',
        label: 'Transfer',
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
      // {
      //   href: '/',
      //   icon: 'mono/github',
      // },
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
}

export const getters = {
  menu: (state) => state.menu,
}
