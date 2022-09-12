<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
    let result = JSON.stringify(data.result, undefined, '  ');
</script>

<h1>Result</h1>
<pre>{result}</pre>

{#if data.result.stack !== undefined}
    <h2>Stack:</h2>
    <pre>{data.result.stack}</pre>
{/if}
