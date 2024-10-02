import {NavLink, NavLinkProps} from "react-router-dom";
import clsx from "clsx";
import s from './Link.module.css'

interface LinkProps extends NavLinkProps {
    className?: string
}

export function Link(props: LinkProps) {
    const {className, children, ...otherProps} = props

    return (
        <NavLink className={({ isActive }) =>
            clsx(className, s.root, isActive ? s.active : '')
        } {...otherProps}>{children}</NavLink>
    );
}
