# Demo that SvelteKit fetch() is broken in Cloudflare Pages

## Steps to reproduce

In Github:
* Fork https://github.com/Deebster/sveltekit-broken-fetch

In Cloudflare:
* Go to Pages
* Create a project > Connect to Git
* Select repo
* In "Build settings":
  * Set "Framework preset" to "SvelteKit"
  * Add Environment variable `NODE_VERSION` with value `16`
* Click "Save and Deploy"

In browser:
* View [webpage](https://sveltekit-broken-fetch.pages.dev/).

## Expected result
```
{
  "uuid": "6ea3d4da-f071-4c46-9054-e917037aed4c"
}
```
(where the actual uuid value is random)

## Actual result
```
{
  "name": "Error",
  "message": "Failed to get the 'mode' property on 'Request': the property is not implemented.",
  "stack": "Error: Failed to get the 'mode' property on 'Request': the property is not implemented.\n    at fetch (worker.mjs:1427:24)\n    at async fetcher (worker.mjs:1414:22)\n    at async load (worker.mjs:603:22)\n    at async load_data (worker.mjs:1690:16)\n    at async worker.mjs:2496:18"
}
```