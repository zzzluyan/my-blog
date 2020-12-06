import { lazy } from 'react';
import { importMDX } from 'mdx.macro';

const Test = lazy(() => importMDX('./md/test.md'));

export default [
    {
        title: '今天我真高兴',
        date: '2020-11-15 00:00:00',
        bgImg: './images/1.JPG',
        contentId: 20201205,
        ContentCom: Test
    }
];