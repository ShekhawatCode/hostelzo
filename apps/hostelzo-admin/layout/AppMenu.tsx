/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const model: AppMenuItem[] = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
    },
    {
      label: 'Website',
      icon: 'pi pi-fw pi-briefcase',
      to: '/pages',
      items: [
        {
          label: 'static-content',
          icon: 'pi pi-fw pi-wrench',
          to: '/pages/static-content',
        },
        {
          label: 'blog',
          icon: 'pi pi-fw pi-book',
          to: '/pages/blog',
        },
      ],
    },

    {
      label: 'Pages',
      icon: 'pi pi-fw pi-briefcase',
      to: '/pages',
      items: [
        {
          label: 'Auth',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              to: '/auth/login',
            },
            {
              label: 'Error',
              icon: 'pi pi-fw pi-times-circle',
              to: '/auth/error',
            },
            {
              label: 'Access Denied',
              icon: 'pi pi-fw pi-lock',
              to: '/auth/access',
            },
          ],
        },
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          to: '/pages/crud',
        },
        {
          label: 'Not Found',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: '/pages/notfound',
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
