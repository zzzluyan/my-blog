import { lazy } from 'react';
import { importMDX } from 'mdx.macro';

export const MDFileID = new Map([
    [20201205, 'test']
])

export function lazyLoadMdFile(fileName = 'error') {
    return lazy(() => importMDX(`./md/${fileName}.md`));
}