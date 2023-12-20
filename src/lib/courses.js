
import { writable } from 'svelte/store';

export const courses = writable([]);

export function addCourse(course) {
    courses.update(c => [...c, course]);
    console.log("Course added");
}
export function deleteCourse(courseX) {
    courses.update(c => c.filter(course => course.courseX !== courseX));
  }
//en tiedä saiko projetkissa käyttää writable storageja json:in sijasta
//mutta itse koin helpommaksi tehdä tällä tavalla, en muista miten luennoilla
//käytettiin jsonia varastona, toteutettiin jotenkin +page.server filun ja backend koodin avulla?
//projektini on nyt jokatapauksessa täysin frontediksi tehty hyödyntäen 
//svelten omia reaktiivisia sovelluksia, enkä tässä asiayhteydessä hyödyntänyt mitään backend toimintoja.
//tämä tietysti aiheuttaa sen että tiedot web sovelluksessani eivät ole "persistent", eli
//kun sivu ladataan uudelleen writable storet tyhjenevät. muttä käyttäen 
//navigation moduulin goto() sovellusta hyödyntäviä back-buttoneita, säilyvät tiedot sovellusta
//käytettäessä. (jostain syystä nuolinapit sekä goto():lle vaihtoehtoinen vanilla js
//toiminto "window.location.href=" kummatkin pyyhkivät tallennetut notet ja courset.)