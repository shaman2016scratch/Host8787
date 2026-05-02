import {resolve} from 'path';

const metadata = {
    name: 'Host8787',
    version: '0.0.1',
    path: '/Host8787',
    path2: '/Host8787/',
    license: 'MIT',
    licenseYear: 2026,
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            }
        }
    }
}

export default metadata