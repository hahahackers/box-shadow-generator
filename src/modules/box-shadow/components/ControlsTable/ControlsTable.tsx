import * as React from 'react'

import css from './ControlsTable.module.css'

export const ControlsTable = (props: any) => <table className={css.root}>{props.children}</table>
