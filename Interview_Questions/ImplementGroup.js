// Added a group by function

const groupBy = key => array =>
  array.reduce(
    (objectsByKeyValue, obj) => ({
      ...objectsByKeyValue,
      [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
    }),
    {}
  );

const cars = [
  { brand: 'Audi', color: 'black' },
  { brand: 'Audi', color: 'white' },
  { brand: 'Ferarri', color: 'red' },
  { brand: 'Ford', color: 'white' },
  { brand: 'Peugot', color: 'white' }
];

const groupByBrand = groupBy('brand');


console.log(
  JSON.stringify({
    carsByBrand: groupByBrand(cars)
}, null, 1)
);
