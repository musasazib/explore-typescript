"use strict";
const salary = 7500;
const friendSalaries = [234, 5667, 756, 534, 356, 678];
const friends = ['Sakib', 'Tamim', 'Robel', 'Nasir'];
friendSalaries[0] = 10500;
friendSalaries.push(13400);
// friendSalaries[4] = '1823';
// friendSalaries.push('43667');
friends.push('Mosfiq');
friends[3] = 'Mahmodullah';
// friends.push(456);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
