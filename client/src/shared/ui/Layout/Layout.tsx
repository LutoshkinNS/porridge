import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import css from './Layout.module.css'

type Props = {
  headerSlot: ReactNode
}

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.headerSlot}
      <div className="container mx-auto px-6">
          <Outlet />
      </div>
      {/*<footer className="container mx-auto px-6">*/}
      {/*  footer*/}
      {/*</footer>*/}
      <ScrollRestoration />
    </div>
  )
}
