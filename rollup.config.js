import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
	],
	plugins: [
		resolve({
			extensions: ['.js', '.jsx'],
		}),
		babel(),
		terser(),
		copy({
			targets: [{ src: 'src/**/*.d.ts', dest: 'dist/types' }],
			flatten: false,
		}),
	],
	external: [
		'prop-types',
		'react',
	],
};
