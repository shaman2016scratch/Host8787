import {resolve} from 'path';

const build = {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
        }
    }
}

export default build