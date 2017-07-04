

function getRow(firstName, lastName, phone) {
    if(phone == undefined){
        phone = '';
    }
    if(typeof lastName ==undefined){
        lastName = '';
    }

    var row ='<tr><td>'+lastName+'</td><td>'+firstName+'</td><td>'+phone+'</td></tr>';
    return row;
}

var contacte = [
    {firstName: 'Nicolae',   lastname: 'Matei' ,phone: '07777777'},
    {firstName: 'Nicolae',   lastname: 'Matei' ,phone: '07777777'},
    {firstName: 'Nicolae',   lastname: 'Matei' ,phone: '07777777'},
    {firstName: 'Nicolae',   lastname: 'Matei' ,phone: '07777777'},
    {firstName: 'Andrei'},
    {lastName: 'Basescu'}
];

    var tableContent = '';
    for(var i = 0; i< contacte.length; i++) {
        var contact = contacte[i];
        tableContent += getRow(contact.firstName, contact.lastname, contact.phone);
    }


$("#contacts-list tbody").html(tableContent);


    // 1.convert from array of arrays into json
    // 2.load contacts from json file with AJAX
    // 3.remove contacts (UI)
    // 4.edit contact (UI)

var person = {
    lastName: "Matei",
    firstName: "Nicolae",
    age: 19,
    married: true,
    skills: ["html", "css" , "js"],
    voiceCall: function(nume) {
        console.info(' te rog sa suni pe', nume);
    },
    partner: {
        firstName: "M",
        age: 18
    }
};

console.info(person.firstName);
person.voiceCall("Soacra");