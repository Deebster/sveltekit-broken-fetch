import type { HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
    // FIXES: https://github.com/sveltejs/kit/issues/6739
    // from https://github.com/sveltejs/kit/issues/6739#issuecomment-1244759743
    const handler = {
        get(target: Request, prop: keyof Request) {
            if (['credentials', 'mode'].includes(prop)) {
                return '!! NOT IMPLEMENTED !!';
            }
            return target[prop];
        }
    };
    return fetch(new Proxy(request, handler));
}
