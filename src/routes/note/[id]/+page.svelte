<script>
	import { notes } from '$lib/notes.js';
	import noteX from '../../Note.svelte';
	export let data;

	let notesss = $notes.find((b) => b.id === +data.id);
</script>

<h1>Notes</h1>
<p>{noteX}</p>
{#if notesss !== undefined}
	<note {...notes} />
{:else}
	<p>Note not found</p>
{/if}