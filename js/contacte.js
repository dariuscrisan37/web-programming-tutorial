function getRow (firstName, lastName, phone) {
    if (phone == undefined) {
        phone = '';
    }
    if (typeof lastName == 'undefined') {
        lastName = '';
    }
    // firstName = firstName || '';

    var row = '<tr><td>' + (firstName || '') + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>';
    return row;
}
var contacte = [];
//iterez contacte si fac chestii
contacte.forEach(function(contact){
    console.info('calling ...'+contact.firstName);
});

//ajax call
$.ajax('servlet/contacte.json').done(function (totJsonul) {
    //console.info("raspuns", contacteleDinJon);
    totJsonul.forEach(function(contact){
        console.info('feed ...'+contact.firstName);
        createRow(contact);
    });
    $("#contacts-list tbody").html(tableContent);
});

console.info('this happens before ajax finishes the task');


// contacte.forEach(createRow);

// $("#contacts-list tbody") [0] .innerHTML = row;


// #contacts-list tbody {color: red}

// 1. convert from array from arrays into json
// 2. load contacts form json file with ajax
// 3. remove contacts (UI)
// 4. edit contacts (UI)