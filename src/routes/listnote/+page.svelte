<script>
    
    import {notes,deleteNote} from '$lib/notes.js';
    import {goto} from '$app/navigation';
    $: allNotes = $notes;

    function deleteBtn(noteX){
        deleteNote(noteX);
        // goto('http://localhost:5173/listnote');
    }
    function goBack() {
    goto('http://localhost:5173');
    }
</script>

{#each allNotes as {noteX, courseX}}
    <div id="notecon">
        <button on:click={()=> deleteBtn(noteX)}>X</button>
        <h2>Course:</h2>
        <p>{courseX}</p><br> 
        <h2>Note:</h2> 
        <p>{noteX}</p><br>
    </div>

    
{/each}
<button id="bkbtn" on:click={goBack}>Back</button>
<style>
    h2{
        color: rgb(81, 128, 10);
        font-weight: bolder;
    }
    #notecon{
        border-style: solid;
        border-color: black;
        border-radius: 5px;
    }
    #bkbtn{
        margin-top: 10px;
    }
</style>