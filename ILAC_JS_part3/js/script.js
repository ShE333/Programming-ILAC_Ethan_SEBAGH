function userForm(){

    // FULL NAME
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var fullname = fname + " " + lname;
    document.getElementById("full_name").value = fullname;

    // EMAIL
    var mail = document.getElementById("email").value;
    document.getElementById("e_mail").value = mail;

    // FULL ADDRESS
    var addr = document.getElementById("address").value;
    var city_ = document.getElementById("city").value;
    var prov = document.getElementById("province").value;
    document.getElementById("address_").value = addr + '  ' + city_ + ", " + prov;

    // MEMBERSHIP INFO
    if(document.getElementById("premium").checked){
        var mmbr = "Premium";
        document.getElementById("sub").value = mmbr;
    }
    if(document.getElementById("standard").checked){
        var mmbr = "Standard";
        document.getElementById("sub").value = mmbr;
    }
    if(document.getElementById("basic").checked){
        var mmbr = "Basic";
        document.getElementById("sub").value = mmbr;
    }

}


function myExcelFuns(){

    var numberStr = document.getElementById("nbrs").value;
    if(numberStr.length<= 0 || numberStr === ' '){
        alert("Enter numbers !");
    }
    else{
        numberStr = numberStr.trim();
        /*const tempArr= numberStr.split(" ",).map(Number);*/
        const numberArr = numberStr.split(" ",).map(Number);
/*
        for(let i = 0; i<tempArr.length; i++){
            if(Number.isInteger(tempArr[i])){
                numberArr[i] = tempArr[i];
            }
        }
*/

        if(document.getElementById("sum").checked){
            var res = 0;
            for (let i = 0; i<numberArr.length; i++){
                res = res + numberArr[i];
            }

            document.getElementById("result").value = res;

        }

        if(document.getElementById("avg").checked){
            var res;
            var sum = 0;
            for (let i = 0; i<numberArr.length; i++){
                sum = sum + numberArr[i];
            }
            res = sum/numberArr.length;

            document.getElementById("result").value = res;

        }

        if(document.getElementById("max").checked){
            var max = numberArr[0];
            for (let i = 1; i<numberArr.length; i++){
                if(numberArr[i] > max){
                    max = numberArr[i];
                }
            }

            document.getElementById("result").value = max;

        }

        if(document.getElementById("min").checked){
            var min = numberArr[0];
            for (let i = 1; i<numberArr.length; i++){
                if(numberArr[i] < min){
                    min = numberArr[i];
                }
            }

            document.getElementById("result").value = min;


        }




    }

}