type Gender = "Male" | "Female" | "Others";

type Person = {
  name: string;
  age: number;
  gender: Gender;
};

const displayPersonDetails = (person: Person) => {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Gender:", person.gender);
};

const isEligibleToVote = (person: Person) => person.age >= 18;

const findPeopleEligibleToVote = (people: Person[]): Person[] =>
  people.filter(isEligibleToVote);

const sauma: Person = {
  name: "Sauma",
  age: 22,
  gender: "Male",
};

const sourov: Person = {
  name: "Sourov",
  age: 17,
  gender: "Male",
};

const riya: Person = {
  name: "Riya",
  age: 20,
  gender: "Female",
};

const people = [sauma, sourov, riya];
const peopleEligibleToVote = findPeopleEligibleToVote(people);

console.log("Person's eligible to vote are:\n");
peopleEligibleToVote.forEach(displayPersonDetails);
