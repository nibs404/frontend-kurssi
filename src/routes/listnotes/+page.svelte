<script>

    // import { notes } from '$lib/notes.js';
    import Note from '../../Note.svelte';

	export let notes;
</script>



<p>List Notes</p>
{#each notes as note}
	<Note {...note} />
{/each}
<!-- {#if $notes.length > 0}
    {#each $notes as note (note.id)}
        <div class="note">
            <p>Course: {note.course}</p>
            <p>Note: {note.noteX}</p>
        </div>
    {/each}
{:else}
    <p>No notes yet.</p>
{/if} -->

