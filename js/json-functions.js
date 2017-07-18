var person = {
    lastName: "Matei",
    firstName: "Nicolae",
    age: 32,
    married: true,
    skills: ["html","css","js"],
    voiceCall: function (nume) {
        console.info ('te rog sa suni pe', nume);
    },
    partner: {
        lastName:"Matei",
        firstName:"Nicolae",
        age: 32,        married: true,
        skills: ["html","css","js"],
        voiceCall: function () {
            console.info ('te rog sa suni pe', nume);
        }
    }
};
