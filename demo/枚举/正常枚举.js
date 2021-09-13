var Sex;
(function (Sex) {
    Sex[Sex["Man"] = 0] = "Man";
    Sex[Sex["Woman"] = 1] = "Woman";
})(Sex || (Sex = {}));
console.log(Sex['Man'] === 0); // true
console.log(Sex[0] === 'Man'); // true
