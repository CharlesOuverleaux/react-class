console.log('Your code goes here...');

// const person: {
//   name :string;
//   age :number;
//   }

enum Role { ADMIN, READ_ONLY }

const person = {
    name: 'Charly',
    age: 30,
    hobbies: ['Sports', 'Music'],
    role: Role.READ_ONLY
  }

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.role);
