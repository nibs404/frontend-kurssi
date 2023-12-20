<script>
	

	export let course;
	export let noteX;
	

	let crew_size = member_count * 2;
</script>

<a href={`/note/${id}`}>
	<div>
		<h3>{course}</h3>
		<p>{noteX}</p>
		
	</div></a>