import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
const exclude = ['node_modules/**', 'tests/**', 'dist/**'];
const name = 'grout';
const input = './src/index.ts';
const plugins = [
    typescript({
        exclude: exclude,
    }),
    babel({
        exclude: exclude,
        babelHelpers: 'bundled',
    }),
    commonjs(),
];
const regular = {
    input: input,
    output: [
        {
            file: `./dist/${name}.module.js`,
            format: 'es',
            name: name,
        },
        {
            file: `./dist/${name}.js`,
            format: 'iife',
            name: name,
        },
    ],
    plugins: plugins,
};
const compact = {
    input: input,
    compact: true,
    output: [
        {
            file: `./dist/${name}.module.min.js`,
            format: 'es',
            name: name,
            plugins: [terser()],
        },
        {
            file: `./dist/${name}.min.js`,
            format: 'iife',
            name: name,
            plugins: [terser()],
        },
    ],
    plugins: plugins,
};
export default [regular, compact];
