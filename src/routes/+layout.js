
import notes from '$lib/notesjson.json';
import courses from '$lib/coursesjson.json';
export async function load() {
    return { notes, courses };
} 

