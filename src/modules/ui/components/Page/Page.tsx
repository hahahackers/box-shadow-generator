import React, { FC } from 'react'

import css from './Page.module.css'

export const Page: FC = ({ children }) => <div className={css.root}>{children}</div>
