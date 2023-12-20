
<script>
    import { addCourse } from '$lib/courses.js';
    import {goto} from '$app/navigation';


let courseX = '';

function saveCourse() {
  const newCourse = { "courseX": courseX };
  addCourse(newCourse);
  courseX = '';

}

function goBack() {
  goto('http://localhost:5173');
//window.location.href='http://localhost:1111/addnote';
}

</script>

<body>





  <p style="margin-top: 30vh;">Add Course</p>
  <!-- <textarea bind:value={course} id="coursefield" placeholder="Course:"></textarea> -->
  <textarea bind:value={courseX} id="mainfield" placeholder="Write A New Course" ></textarea>
  <button id="svbtn" on:click={saveCourse}>Save</button>
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
      height: 20px;
  }
</style>