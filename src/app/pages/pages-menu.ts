import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Candidato',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'listar',
        link: '/pages/candidato/listar',
      },
      {
        title: 'crear',
        link: '/pages/candidato/crear',
      },
      
      
    ],
  },
  {
    title: 'Partido',
    icon: 'text-outline',
    children: [
      {
        title: 'listar',
        link: '/pages/partido/listar',
      },
      {
        title: 'crear',
        link: '/pages/partido/crear',
      },
    ],
  },
  {
    title: 'Mesa',
    icon: 'grid-outline',
    children: [
      {
        title: 'listar',
        link: '/pages/mesas/listar',
      },
      {
        title: 'crear',
        link: '/pages/mesas/crear',
      },
    ],
  },
  {
    title: 'Resultados',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: 'listar',
        link: '/pages/resultados/listar',
      },
      {
        title: 'crear',
        link: '/pages/resultados/crear',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/pages/seguridad/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
