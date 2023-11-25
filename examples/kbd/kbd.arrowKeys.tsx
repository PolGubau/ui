import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';
import { Kbd } from '~/src';
import React from 'react';

const code = `
'use client';

import { Kbd } from 'pol-ui';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </div>
  );
}
`;

const codeRSC = `
import { Kbd } from 'pol-ui';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd icon={MdKeyboardArrowUp} />
      <Kbd icon={MdKeyboardArrowDown} />
      <Kbd icon={MdKeyboardArrowLeft} />
      <Kbd icon={MdKeyboardArrowRight} />
    </div>
  );
}

export const arrowKeys = {
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
  githubSlug: 'kbd/kbd.arrowKeys.tsx',
  component: <Component />,
};
