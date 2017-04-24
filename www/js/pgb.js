function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


function Contacts(contacts) {
    let list = "";
    for (var i = 0; i < contacts.length; i++) {
        list += "Nazwa: " + contacts[i].displayName + " - " + contacts[i].phoneNumber + "\n";
    }
    navigator.notification.alert(list)
};

function onErrorC(contactError) {
    navigator.notification.alert('onError!');
};
function showContacts() {
    var optionsC = new ContactFindOptions();
    optionsC.filter = "";
    optionsC.multiple = true;
    var filter = ["displayName", "phoneNumbers"];
    navigator.contacts.find(filter, Contacts, onErrorC, optionsC);
}
