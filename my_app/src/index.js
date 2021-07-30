// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another ?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out.We have FRUITSLEFT left.”

import foods from "./food";
import { choice, remove } from "./helpers";

let fruit = choice(foods);
console.log(`I have ${foods.length} fruits`)
console.log(`I'd like a ${fruit}, thanks!`);
console.log(`Here you go: ${fruit}`);

remove(foods, fruit);
console.log(`Now I have ${foods.length} fruits`)
console.log(foods);
