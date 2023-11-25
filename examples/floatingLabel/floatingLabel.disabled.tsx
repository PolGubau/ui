import { FloatingLabel } from '~/src';
import React from 'react';

const code = `
'use client';

import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}

export const disabled = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'floatingLabel/floatingLabel.disabled.tsx',
  component: <Component />,
};
