// Employee Registration
var employeeArray = [];
var count = 1;
var tableBody = $('#table_body');
var charArray = ['A','B','C','D','E','F','G','H','I','J','K','L'];

// Click on Register
$('#register').click(function() {
    var employee = {};
    var sno = count;
    var empName = $('#emp_name').val();
    var empAge = $('#emp_age').val();
    var empDesg = $('#emp_desg').val();
    var jobLocation = $('#job_location').val();

    if(empName !== '' && empAge !== '' && empDesg !== '' && jobLocation !== ''){
        employee = {
            sno : generateRandomID(),
            empName : empName,
            empAge : empAge,
            empDesg : empDesg,
            jobLocation : jobLocation
        };
        employeeArray.push(employee);
    }
    count++;
    clearTheDetails();
    displayTableData(employeeArray);
});

// Delete button Logic
$('#delete_button').click(function() {
    employeeArray = [];
    tableBody.html('');
    count = 1;
});

// Display the Table Data
function displayTableData(employeeArray) {
    var finalHTMLString = '';
    for(var index in employeeArray){
        var employee = employeeArray[index];
        finalHTMLString += prepareHTMLString(employee) + '\n';
    }
    tableBody.html(finalHTMLString);
}

// Prepare HTML String
function prepareHTMLString(employee) {
    var htmlString = '<tr>\n' +
                        '<td>' + employee.sno + '</td>\n' +
                        '<td>' + employee.empName + '</td>\n' +
                        '<td>' + employee.empAge + '</td>\n' +
                        '<td>' + employee.empDesg + '</td>\n' +
                        '<td>' + employee.jobLocation + '</td>\n' +
                     '</tr>';
    return htmlString;
}

// Clear the HTML Fields
function clearTheDetails() {
    $('#emp_name').val('');
    $('#emp_age').val('');
}

// generate Random ID
function generateRandomID() {
    var fistStr = '';
    var secondStr = '';
    for(var i=0; i<charArray.length/2; i++){
        var random1 = Math.round(Math.random() * 10);
        fistStr += charArray[random1];
    }
    for(var j=charArray.length/2; j>=0;j--){
        var random2 = Math.round(Math.random() * 10);
        secondStr += charArray[random2];
    }
    return mixedString(fistStr,secondStr);
}

function mixedString(firstStr,secondStr) {
    var random = random1 = Math.round(Math.random() * 100);
    return firstStr + random + secondStr;
}

console.log(generateRandomID());