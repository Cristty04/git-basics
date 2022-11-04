function empujarHeroe(arrayHeroes, nuevoHeroe){
    return arrayHeroes.push(nuevoHeroe)
  }
  
  empujarHeroe(superheroes, 'Thor');
  
  empujarHeroe(superheroes, 'Iron-Man');
  
  function sacarHeroe(arrayHeroes){
    return arrayHeroes.pop()
  }
  
  sacarHeroe(superheroes);
  
  