
<script>
import {notes, addNote} from '$lib/notes';
import {goto} from '$app/navigation';
import {courses} from '$lib/courses.js';
$:allCourses = $courses;

let selectedCourse='';
let noteX = '';
let isClicked = false;
function saveNote() {
    const newNote = {"id":notes.length,"noteX":noteX,"courseX":selectedCourse }; 
    addNote(newNote);
    // course = '';
    if(selectedCourse.length>0){
        console.log("success");
    }
    else{console.log("something happened");
    }
    noteX = '';
    
}

function goBack() {
    goto('http://localhost:5173');
}


function doClick() {
    isClicked = !isClicked;
}


</script>

<body>


    <p style="margin-top: 30vh;">Write Your Note</p>
  
    <button on:click={doClick} id="classcon" class:clicked={isClicked}>choose a course</button>
    
    {#if isClicked}
    <div id="coursecon">
        <h2>Course:</h2>
        {#each allCourses as { courseX }}
          <button id="coursebtn" on:click={() => selectedCourse = courseX}>{courseX}</button><br>
        {/each}
      </div>
    {/if}
  
    <textarea bind:value={noteX} id="mainfield" placeholder="Write Your Note"></textarea>
    
    <button id="svbtn" on:click={saveNote}>Save</button>
    <button id="bkbtn" on:click={goBack}>Back</button>
    
</body>


<style>
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
    #mainfield{

        width: 50vh;
        height: 300px;
    }
    #coursecon{
        /* display: none; */
        height: fit-content;
    }
    .clicked {
        background-color: lightblue;
        height: fit-content;
        }
    #coursebtn{
        cursor: pointer;
    }
</style>

<!--
meni tunti kun etin miks selectedCourse ei näy tallenetuissa noteissa, ongelma oli "Course: ":sC, 
eikä "courseX"(eli addcourse tekstikentän value arvo):sC, 
unohdin vissii et kirjotetaan funktion parametrejä eikä viestiä...
-->
<!--
    const bkbtn = document.getElementById('bkbtn');
// const svbtn = document.getElementById('svbtn');
        // const mainfield = document.getElementById('mainfield');
        // let savedtext = "nothing saved";
        
        //     function saveNote() {
        //         savedText = mainfield.value;
        //     }
-->
