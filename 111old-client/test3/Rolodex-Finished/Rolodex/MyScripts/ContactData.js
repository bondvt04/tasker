/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="contactsController.ts" />
var contactsApp;
var Rolodex;
(function (Rolodex) {
    var ContactDataServer = (function () {
        function ContactDataServer() {
            this.contacts = [
                {
                    first: "Chris",
                    last: "Okelberry",
                    address: "8467 Cliford Court",
                    city: "Redmond",
                    state: "Washington",
                    zipCode: 98052,
                    cellPhone: 3155550144,
                    homePhone: 3155550144,
                    workPhone: 3155550144,
                    showDetails: true
                },
                {
                    first: "Kim",
                    last: "Abercrombie",
                    address: "9752 Jeanne Circle",
                    city: "Carnation",
                    state: "Washington",
                    zipCode: 98014,
                    cellPhone: 2085550144,
                    homePhone: 2085550144,
                    workPhone: 2085550144,
                    showDetails: true
                },
                {
                    first: "Ed",
                    last: "Dudenhoefer",
                    address: "4598 Manila Avenue",
                    city: "Seattle",
                    state: "Washington",
                    zipCode: 98104,
                    cellPhone: 9195550140,
                    homePhone: 9195550140,
                    workPhone: 9195550140,
                    showDetails: true
                },
                {
                    first: "JoLynn",
                    last: "Dobney",
                    address: "7126 Ending Ct.",
                    city: "Seattle",
                    state: "Washington",
                    zipCode: 98104,
                    cellPhone: 9035550145,
                    homePhone: 9035550145,
                    workPhone: 9035550145,
                    showDetails: true
                },
                {
                    first: "Bryan",
                    last: "Baker",
                    address: "2275 Valley Blvd.",
                    city: "Monroe",
                    state: "Washington",
                    zipCode: 98272,
                    cellPhone: 7125550113,
                    homePhone: 7125550113,
                    workPhone: 7125550113,
                    showDetails: true
                }
            ];
        }
        ContactDataServer.prototype.getContacts = function () {
            return this.contacts;
        };
        ContactDataServer.prototype.addContact = function (contact) {
            this.contacts.push(contact);
            return this.contacts;
        };
        return ContactDataServer;
    })();
    Rolodex.ContactDataServer = ContactDataServer;
})(Rolodex || (Rolodex = {}));
contactsApp.factory("contactData", function () { return new Rolodex.ContactDataServer(); });
//# sourceMappingURL=ContactData.js.map