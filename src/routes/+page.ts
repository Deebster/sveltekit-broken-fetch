import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const result = await fetch('https://httpbin.org/uuid')
        .then(rsp => rsp.json())
        .catch(err => ({
            name: err.name,
            message: err.message,
            stack: err.stack,
        }));

    return { result };
}

// We want to test SSR only
export const csr = false;
