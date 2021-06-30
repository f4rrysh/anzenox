import { fore } from '../utils/color.js';

export function error(err: string, msg: string): void {
    return console.log(`[${fore.red}Error: ${err}${fore.reset}]: ${msg}`);
}