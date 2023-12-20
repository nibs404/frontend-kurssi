<style>
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;

    }
    #title{
        color: rgb(73, 119, 5);
        font-size: 50px;
        font-family: sans-serif;
        margin: auto;
    }
    #btnbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 300px;
        
    }

    .btn{
        background-color: rgb(73, 119, 5);
        color: white;
        cursor: pointer;
        max-width: fit-content;
        border: black;
        border-style: solid;
        border-radius: 5px;
        padding: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
        margin: auto;
    }
    .btn:hover{
        background-color: rgb(43, 70, 3) ;
        color: red;
    }
</style>
<body>
    <div id="title">NotesApp</div>
    <div id="btnbox">
        <a class="btn" href="http://localhost:5173/addnote">Create Notes For Class</a>
        <a class="btn" href="http://localhost:5173/listnote">List Notes</a>
        <a class="btn" href="http://localhost:5173/addcourse">Add Courses</a>
    </div>
    
</body>
