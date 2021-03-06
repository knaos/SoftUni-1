﻿function solve(arg) {
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    for (var i = 0; i < arg.length; i++) {
        var number = Math.floor(Number(arg[i]));
        if (number > 10) {
            var type = number > 40 ? 'sword' : 'dagger';
            var application = checkApplication(number);
            console.log('<tr><td>%s</td><td>%s</td><td>%s</td></tr>', number, type, application);
        }        
    }

    console.log('</tbody>');
    console.log('</table>');

    function checkApplication(length) {
        switch(length % 10) {
            case 1: case 6: return 'blade';
            case 2: case 7: return 'quite a blade';
            case 3: case 8: return 'pants-scraper';
            case 4: case 9: return 'frog-butcher';
            case 5: case 0: return '*rap-poker';
        }
    }   
}

//var input = [
//    ['17.8',
//     '19.4',
//     '13',
//     '55.8',
//     '126.96541651',
//     '3']
//];

//for (var str in input) {
//    solve(input[str]);
//}