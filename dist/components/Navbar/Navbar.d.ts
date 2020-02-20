import React from 'react';
import { NavLink, NavIcon, NavHeader, NavLinkList, NavSearch } from './interfaces';
interface Props extends React.Props<any> {
    bg?: string;
    variant?: 'light' | 'dark';
    navItems: (NavIcon | NavHeader | NavLink | NavLinkList | NavSearch)[];
    className?: string;
}
declare const Navbar: {
    (props: Props): JSX.Element;
    defaultProps: {
        bg: string;
        variant: string;
    };
};
export { Navbar };
