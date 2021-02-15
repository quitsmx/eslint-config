/*
  The base config in ../.eslint.json defines an "overrides" for "*.tsx" files,
  with only one rule "semi" and the config in ../../typescript defines other
  "overrides" block containing "no-unused-vars:off".
  The linting of this file will succeed if both blocks are merged, but must
  exist a warnig from TS, hidden by the @ts-ignore
*/
// @ts-ignore this is preact
import { h } from 'preact'
import { useRef } from 'preact/hooks'

import type { FunctionComponent } from 'preact'

type Props = { foo: typeof Foo; bar: readonly string[][]; baz: string }

const Test1: FunctionComponent<Props> = props => {
  // no-unused-vars must be off. Comment next line to show the TS warning
  const ref = useRef<HTMLDivElement>()

  return (
    // @ts-expect-error
    <div ref={ref} class={props.baz} data-url="#">
      {'foo'}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Foo = () => {}

export default Test1
