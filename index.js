var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {
        
      /*
      // Spørsmål 1: 
        for (const i of rows) {
            if (i[2] != "forNavn") {
                document.write(`${i[2]} ${i[3]} <br>`);
            }
        }
        */


        /*
        // Spørsmål 2: 
        let sumKvinner = 0;
        for (const i of rows) {
            if (i[11] == "kvinne") {
                sumKvinner++;
            }
        }
        console.log(`Antall kvinner i listen: ${sumKvinner}`);
        */

        /*
        // Spørsmål 3: 
        let sum1MKB = 0;
        for (const i of rows) {
            if (i[11] == "kvinne" && i[10] == "1MKB") {
                sum1MKB++;
            }
        }
        console.log(`Antall jenter i 1MKB: ${sum1MKB}`);
        */

        /*
        // Spørsmål 4:
        var divContainer = document.createElement("div");
        divContainer.className = 'container';
        document.body.appendChild(divContainer);

        for (const element of rows) {
            if (element[7]) {
                let img = document.createElement('img');
                img.src = element[7];
                img.style.maxWidth = '200px'; 
                img.style.maxHeight = '200px'; 
                divContainer.appendChild(img);
            }
        }
        */

        /*
        // spørsmål 5

        var divContainer = document.createElement("div");
        divContainer.classname = 'container';
        document.body.appendChild(divContainer);

        if (rows.length >= 15) {
          var row = rows[14];
          var img = document.createElement('img')
          img.src = row[7];
          divContainer.appendChild(img);
        }
*/

/* 
// spørsmål 6

var divContainer = document.createElement("div");
    divContainer.className = 'container';
    document.body.appendChild(divContainer);
 
    rows.forEach(element => {
      if (element[8] == "Asker") {
        var img = document.createElement('img');
        img.src = element[7];
        divContainer.appendChild(img);
      }
    }); */

    /*
// spørsmål 7
var eldsteStudentContainer = document.createElement("div");
eldsteStudentContainer.className = "eldste-student";
document.body.appendChild(eldsteStudentContainer);

var eldsteStudent = null;
rows.forEach(function (row, index) {
  
    if (index === 0) {
        return;
    }
    var fødselsår = parseInt(row[5]);
    if (!eldsteStudent || fødselsår < eldsteStudent.fødselsår) {
        eldsteStudent = {
            fornavn: row[2],
            etternavn: row[3],
            fødselsår: fødselsår,
        };
    }
});

if (eldsteStudent) {
    var currentYear = new Date().getFullYear();
    var alder = currentYear - eldsteStudent.fødselsår;
    eldsteStudentContainer.innerHTML = `Den eldste studenten er ${eldsteStudent.fornavn} ${eldsteStudent.etternavn}`;
}
*/

// Spørsmål 8


});
});
