const superHeroTeams = [
    {
      name: 'Dream Team',
      heroes: [
        {
          id: '1',
          name: 'Superman',
          superPowers: ['speed', 'x-ray vision', 'flying'],
        },
        {
          id: '2',
          name: 'Spieder-Man',
          superPowers: ['spieder sense'],
        },
        {
          id: '3',
          name: 'Batman',
          superPowers: ['money', 'immortality'],
        },
        {
          id: '4',
          name: 'Ivan',
          superPowers: ['Javascript'],
        },
      ],
    },
    {
      name: 'Dream Agent Team',
      heroes: [
        {
          id: '1',
          name: 'James Bond',
          superPowers: ['sexy', 'xharming', 'agility'],
        },
        {
          id: '2',
          name: 'Json Bourne',
          superPowers: ['losing memory'],
        },
        {
          id: '3',
          name: 'Jack Bauer',
          superPowers: ['punctuality'],
        },
      ],
    },
  ];
  
  // Función que itera sobre los poderes
  function* iteratePowers(superPowers) { 
    for (let i = 0; i < superPowers.length; i++) { 
      const superPower = superPowers[i]; 
      console.log(superPower);
      yield superPower; 
    }
  }
  
  //Variable auxiliar
  let superValue = '';

  // Función que itera sobre heroes
  function* iterateSuperHeores(superHeores) {
    for (let i = 0; i < superHeores.length; i++) {
      const superHeore = superHeores[i];
      //Se asigna el valor del superheroe a la variable auxiliar
      superValue = superHeore;
      console.log(superHeore)
      yield* iteratePowers(superHeore.superPowers);
    }
  }
  
  // Función que itera sobre los Equipos
  function* iterateTeams(superHeoresTeams) {
    for (let i = 0; i < superHeoresTeams.length; i++) {
      const superHeoresTeam = superHeoresTeams[i];
      console.log(superHeoresTeam);
      yield* iterateSuperHeores(superHeoresTeam.heroes);
    }
  }
  
  const generatorObject = iterateTeams(superHeroTeams);
  // Obteniendo el primer resultado
  let result = generatorObject.next();
  // Datos de busqueda
  const superPowerWanted = "immortality"
  let counter = 0;

  while (!result.done) {
    const superPower = result.value;
    //Y aqui ya solo se accede a el nombre del heroe
    let heroName = superValue.name;
    counter++;
    if (superPower === superPowerWanted) {
      // Solo se imprime que el super poder ha sido encontrado
      // pero no a que héroe pertenece
      // deberia imprimir algo asi
      // > El super poder de immortality le pertenece a Batman
      console.log("");
      console.log('Super Power has been found');
      console.log(`El superpoder es:-${superPower}- y el heroe al que le pertenece es:${heroName}`);
      break;
    } else {
      result = generatorObject.next();
    }
  }
  console.log(`El sistema realizo ${counter} comparaciones en el conjunto de datos`);
