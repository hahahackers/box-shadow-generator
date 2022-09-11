import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { FormGroup, InputGroup } from '@blueprintjs/core'
import { parsers as p } from '@alextheartisan/form-tools/src/index'

import css from './NumberConversionForm.module.scss'
import { fromBin, fromHex, spacifyRight, toBin, toHex } from '$/number-conversion/utils/utils'

interface NumberConversionFormValues {
  dec: string
  bin: string
  hex: string
}

interface NumberConversionFormProps {}

export const NumberConversionForm = () => (
  <Form
    initialValues={{
      dec: '',
      bin: '',
      hex: '',
    }}
    onSubmit={() => {
      /* Do nothing */
    }}
    mutators={{
      // expect (field, value) args from the mutator
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value)
      },
    }}
  >
    {({ active, form: { mutators } }) => (
      <form>
        <FormGroup className={css.formGroup} label="DEC" labelFor="dec">
          <Field name="dec" parse={p.digits}>
            {({ input }) => (
              <InputGroup
                large
                autoComplete="off"
                {...input}
                onChange={(event) => {
                  mutators.setValue('bin', toBin(event.target.value))
                  mutators.setValue('hex', toHex(event.target.value))

                  input.onChange(event)
                }}
              />
            )}
          </Field>
        </FormGroup>
        <FormGroup className={css.formGroup} label="BIN" labelFor="bin">
          <Field
            name="bin"
            format={(value) => (active === 'bin' ? value : spacifyRight(value, 4))}
            parse={(value) => value.replace(/[^0-1]/g, '')}
          >
            {({ input }) => (
              <InputGroup
                large
                autoComplete="off"
                {...input}
                onChange={(event) => {
                  mutators.setValue('dec', fromBin(event.target.value))
                  mutators.setValue('hex', toHex(fromBin(event.target.value)))

                  input.onChange(event)
                }}
              />
            )}
          </Field>
        </FormGroup>
        <FormGroup className={css.formGroup} label="HEX" labelFor="hex">
          <Field
            name="hex"
            format={(value) => (active === 'hex' ? value : spacifyRight(value, 2))}
            parse={(value) => value.toUpperCase().replace(/[^0-9a-fA-F]/g, '')}
          >
            {({ input }) => (
              <InputGroup
                large
                autoComplete="off"
                {...input}
                onChange={(event) => {
                  mutators.setValue('dec', fromHex(event.target.value))
                  mutators.setValue('bin', toBin(fromHex(event.target.value)))

                  input.onChange(event)
                }}
              />
            )}
          </Field>
        </FormGroup>
      </form>
    )}
  </Form>
)
