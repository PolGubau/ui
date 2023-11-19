import { type CodeData } from '~/components/code-demo';
import { Alert } from '~/src';

const code = `
'use client';

import { Alert } from 'pol-ui';

function Component() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

const codeRSC = `
import { Alert } from 'pol-ui';

function Component() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export const root: CodeData = {
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
  githubSlug: 'alert/alert.root.tsx',
  component: <Component />,
};
