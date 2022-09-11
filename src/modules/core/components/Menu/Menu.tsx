import React from 'react'
import cn from 'clsx'
import { Alignment, AnchorButton, Navbar } from '@blueprintjs/core'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'

import css from './Menu.module.css'

// const FancyLink = React.forwardRef<NavLink, NavLinkProps>((props, ref) => (
//   <AnchorButton href={props.to}  {...props} />
// ))

export const Menu = () => {
  let history = useHistory()
  let { pathname } = useLocation()

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        {/*<Navbar.Heading>Blueprint</Navbar.Heading>*/}
        {/*<Navbar.Divider />*/}

        <AnchorButton
          className={cn('bp3-minimal', { 'bp3-active': pathname.includes('box-shadow') })}
          onClick={() => history.push('/box-shadow')}
          text="Box shadow"
        />
        <AnchorButton
          className={cn('bp3-minimal', { 'bp3-active': pathname.includes('number-conversion') })}
          onClick={() => history.push('/number-conversion')}
          text="Number conversion"
        />
      </Navbar.Group>
    </Navbar>
    // <ul className={css.root}>
    //   <li className={css.item}>
    //     <Link to="/box-shadow">Box shadow</Link>
    //   </li>
    //   <li className={css.item}>
    //     <Link to="/gradients">Gradients</Link>
    //   </li>
    //   <li className={css.item}>
    //     <Link to="/number-conversion">Number Conversion</Link>
    //   </li>
    // </ul>
  )
}
