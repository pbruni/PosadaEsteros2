module.exports = {
  people: getPeople(),
  instrumentales: getInstrumentales()
};


function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getInstrumentales(){
  var date = new Date();
  return [
    {Instrumental : { id: 1, observacion: 'Observacion de relacion', costo: '21,58', en_funcionamiento: 'Si', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '185', laboratorio_id: '4'}},
    {Instrumental : { id: 2, observacion: 'Observacion de relacion', costo: '47,54', en_funcionamiento: 'Si', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '354', laboratorio_id: '168'}},
    {Instrumental : { id: 3, observacion: 'Observacion de relacion', costo: '250,48', en_funcionamiento: 'No', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '376', laboratorio_id: '14'}},
    {Instrumental : { id: 4, observacion: 'Observacion de relacion', costo: '1485', en_funcionamiento: 'Si', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '40', laboratorio_id: '5'}},
    {Instrumental : { id: 5, observacion: 'Observacion de relacion', costo: '124', en_funcionamiento: 'No', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '514', laboratorio_id: '6'}},
    {Instrumental : { id: 6, observacion: 'Observacion de relacion', costo: '74,80', en_funcionamiento: 'Si', fecha_actalizacion: date.toLocaleString(), fecha_adquisicion: date.toLocaleString(), instrumental_id: '844', laboratorio_id: '19'}}
  ];
}
