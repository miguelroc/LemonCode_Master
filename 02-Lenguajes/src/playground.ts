// Ex.1 Array Operations *********************************************************************************************
console.log("**************************Ex.1*************************");

//data:
const arrayWord: string[] = ["hey", "ho", "let´s go"];
const arrayNum: number[] = [1, 2, 3, 4, 5];

//Head
console.log("***************HEAD**************");

console.log("Ex. Head:");
const head1 = (h: Array<string>) => h[0];
console.log(head1([...arrayWord]));

// console.log("Ex. Head_2:");
// const head2 = ([h]: Array<string>) => h;
// console.log(head2(arrayWord));
// console.log(arrayWord);

//Tail
console.log("***************TAIL**************");
console.log("Ex. Tail:");
const tail = ([h, ...t]: Array<string>): string[] => t;
console.log(tail(arrayWord));
console.log(arrayWord);

//Init
console.log("***************INIT**************");
console.log("Ex. Init:");
const init = (copyInit: Array<string>): string[] => {
  copyInit.pop();
  return copyInit;
};
console.log(init([...arrayWord])); //['hey', 'ho']
console.log(arrayWord);

//Last
console.log("***************LAST**************");
console.log("Ex. Last:");
const last = (lastItem: Array<string>): string => lastItem.pop() as string;
console.log(last([...arrayWord])); //let´s go

// Ex.2 Concats *********************************************************************************************
console.log("**************************Ex.2*************************");
console.log("***************CONCAT 1**************");
const concatenacion1 = (conc1: number[], conc2: string[]): string[] =>
  conc2.concat(conc1.map(String));
console.log(concatenacion1([...arrayNum], [...arrayWord])); //['hey', 'ho', 'let´s go', '1', '2', '3', '4', '5']

console.log("***************CONCAT 2**************");
const concatenacion2 = (conc1: number[]): number[] => conc1;
console.log(concatenacion2([...arrayNum, ...arrayNum])); //['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']

console.log("***************CONCAT 3**************");
const concatenacion3 = ([...conc1]: number[], [...conc2]: number[]): number[] =>
  conc1.concat(conc2);
console.log(concatenacion3(arrayNum, arrayNum)); //['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']

//múltiples arrays de entrada
console.log("***************CONCAT MULT**************");
const concatenacioMult = (
  conc1: number[],
  conc2: number[],
  conc3: number[]
): number[] => conc1.concat(conc2, conc3);
console.log(concatenacioMult([...arrayNum], [...arrayNum], [...arrayNum])); //[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

//Ex.3 Clone Merge *********************************************************************************************

//Clone
console.log("***************CLONE**************");
function clone(source: Composicion): Composicion {
  return source;
}

interface Pais {
  name: string;
  id: number;
}

interface Composicion {
  name: string;
  age: number;
  country: Pais;
}

const objeto: Composicion = {
  name: "Pepe",
  age: 18,
  country: {
    name: "Spain",
    id: 1,
  },
};

const sourceClone = clone({ ...objeto });
console.log(sourceClone); //{name: 'Pepe', age: 18, country: {name: 'Spain', id: '1' }}
console.log(objeto); //{name: 'Pepe', age: 18, country: {name: 'Spain', id: '1' }}

//Merge
console.log("**************************Ex.3*************************");
console.log("***************MERGE**************");
const a1 = {
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
};

const b1 = {
  name: "Luisa",
  age: 31,
  married: true,
};

function merging<A, B>(source: A, target: B): A & B {
  const c = { ...target, ...source };
  return c;
}
console.log(merging(a1, b1));

//Ex.4 Read Books *********************************************************************************************
console.log("**************************Ex.4*************************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead<A extends Book[], B>(books: A, titleToSearch: B): Boolean {
  const read = (work: Book) =>
    work.title == titleToSearch && work.isRead == true;
  const value = books.some(read);
  return value;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

//Ex.5 Slot Machine
console.log("**************************Ex.5*************************");

interface Tragaperras {
  id: number;
  contador: number;
}

class SlothMachine implements Tragaperras {
  id: number;
  contador: number;
  constructor(id: number, contador: number) {
    this.id = id;
    this.contador = 0;
  }

  public play() {
    this.contador++;
    const values: Boolean[] = this.randomValues();
    const verify: Boolean = this.checkValues(values);
    if (verify) {
      console.log(`Congratulations!!!. You won ${this.contador} coins!!`);
      this.contador = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  private randomValues(): Boolean[] {
    const random: Boolean[] = [false, false, false];
    for (let i = 0; i < random.length; i++) {
      random[i] = Boolean(Math.round(Math.random()));
    }
    console.log("Random_Values: [" + random + "]");
    return random;
  }

  private checkValues(values: Boolean[]): Boolean {
    const isTrue = (value: Boolean) => value == true;
    return values.every(isTrue);
  }
}

const machine1 = new SlothMachine(1, 0);
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
