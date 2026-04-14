var selectedIndex = null;
var tomb = new Array();
tomb.push({"vnev":"Monacoi","hely":"Monaco","ido":"1994-05-15"});
tomb.push({"vnev":"Osztrák","hely":"Ausztria","ido":"1976-08-15"});
printArray();
function printArray(){
    var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var newRow;
    for (i = 0; i < tomb.length; i++) {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = tomb[i].vnev;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = tomb[i].hely;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = tomb[i].ido;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = '<a onClick="onEdit('+i+')" id="modosit">Módosítás</a>' + '<a onClick="onDelete('+i+')"id="torol">Törlés</a>';
    }
}
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["vnev"] = document.getElementById("vnev").value;
    formData["hely"] = document.getElementById("hely").value;
    formData["ido"] = document.getElementById("ido").value;
    return formData;
}
function insertNewRecord(data) {
    tomb.push({"vnev":data.vnev,"hely":data.hely,"ido":data.ido});
    printArray();
}

function resetForm() {
    document.getElementById("vnev").value = "";
    document.getElementById("hely").value = "";
    document.getElementById("ido").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("vnev").value = tomb[index].vnev;
    document.getElementById("hely").value = tomb[index].hely;
    document.getElementById("ido").value = tomb[index].ido;
    selectedIndex=index;
}
function updateRecord(formData) {
    tomb[selectedIndex].vnev=formData.vnev;
    tomb[selectedIndex].hely=formData.hely;
    tomb[selectedIndex].ido=formData.ido;
    printArray();
}
function onDelete(index) {
    if (confirm('Biztos ki akarod törölni?')) {
        tomb.splice(index, 1); 
        resetForm();
        printArray();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("vnev").value == "") {
        isValid = false;
        document.getElementById("ellenorzes").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ellenorzes").classList.contains("hide"))
            document.getElementById("ellenorzes").classList.add("hide");
    }
    return isValid;
}