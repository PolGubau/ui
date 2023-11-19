'use client';

import { useState } from 'react';
import { type CodeData } from '~/components/code-demo';
import { Pagination } from '~/src';

const code = `
'use client';

import { Pagination } from 'pol-ui';
import { useState } from 'react';

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="navigation" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  );
}
`;

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="navigation" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  );
}

export const navigation: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'pagination/pagination.navigation.tsx',
  component: <Component />,
};
