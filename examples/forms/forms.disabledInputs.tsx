import { Label, TextInput } from '~/src';
import React from 'react';

const code = `
'use client';

import { Label, TextInput } from 'pol-ui';

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Label htmlFor="disabledInput1">API token</Label>
      <TextInput type="text" id="disabledInput1" placeholder="Disabled input" disabled />
      <Label htmlFor="disabledInput2">Personal access token</Label>
      <TextInput type="text" id="disabledInput2" placeholder="Disabled readonly input" disabled readOnly />
    </div>
  );
}
`;

const codeRSC = `
import { Label, TextInput } from 'pol-ui';

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Label htmlFor="disabledInput1">API token</Label>
      <TextInput type="text" id="disabledInput1" placeholder="Disabled input" disabled />
      <Label htmlFor="disabledInput2">Personal access token</Label>
      <TextInput type="text" id="disabledInput2" placeholder="Disabled readonly input" disabled readOnly />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <Label htmlFor="disabledInput1">API token</Label>
      <TextInput type="text" id="disabledInput1" placeholder="Disabled input" disabled />
      <Label htmlFor="disabledInput2">Personal access token</Label>
      <TextInput type="text" id="disabledInput2" placeholder="Disabled readonly input" disabled readOnly />
    </div>
  );
}

export const disabledInputs = {
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
  githubSlug: 'forms/forms.disabledInputs.tsx',
  component: <Component />,
};
