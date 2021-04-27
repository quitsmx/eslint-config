/*
  The base config in ../.eslint.json defines an "overrides" for "*.tsx" files,
  with only one rule "semi" and the config in ../../typescript defines other
  "overrides" block containing "no-unused-vars:off".
  The linting of this file will succeed only if both blocks are merged.
*/
/** @jsx h */
import { h } from 'preact';
import { useRef } from 'preact/hooks';

import type { FunctionComponent } from 'preact';

type Props = { foo: any; bar: readonly string[][]; baz: string };

const Test1: FunctionComponent<Props> = props => {
  // no-unused-vars must be off. Comment next line to show the TS warning
  const ref = useRef<HTMLDivElement>();

  return (
    <div ref={ref} class={props.baz} data-url="#">
      {'foo'}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Foo = () => {
  //
};

export default Test1;
