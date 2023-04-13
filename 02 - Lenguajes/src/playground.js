const getDataAsync = (callback) => {
  const randomTime = Math.random() * 2000 + 1000;
  const randomData = Math.floor(Math.random() * 100);
  setTimeout(() => callback(randomData), randomTime);
};

const promise = fetch("https://api.github.com/users/lemoncode");
promise.then(
  (response) => console.log(response),
  (error) => console.log(error)
);

fetch("https://api.github.com/users/lemoncode")
  .then((response) => response.json()) //cuando se resuelva la promesa muestra el mensaje de la respuesta
  .then((data) => console.log(data)) //cuando el parseo del json termine se mostrará por console
  .catch((error) => console.log(error)); //error genérico para segunda promesa

//creamos promesa
const getDataWithPromise = (index) => {
  return new Promise((resolve, reject) => {
    getDataAsync((data) => {
      console.log(index, " => ", data);
      resolve(data);
    });
  });
};

//consumiendo promesas
//   .then((data) => console.log(data))
// getDataWithPromise()
//   .catch((error) => console.log(error));

async function GetDataWithSugar() {
    const data1 = await getDataWithPromise(1);
    const data2 = await getDataWithPromise(2);
    const data3 = await getDataWithPromise(3);
    return [data1, data2, data3];
}

GetDataWithSugar().then(console.log);
