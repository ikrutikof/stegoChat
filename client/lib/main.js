"use strict"

// import {img} from './lib/imageLib/imageLib.js';
// let dropArea = document.getElementById('dropArea')
// dropArea.addEventListener('dragenter', handlerFunction, false)
// dropArea.addEventListener('dragleave', handlerFunction, false)
// dropArea.addEventListener('dragover', handlerFunction, false)
// dropArea.addEventListener('drop', handlerFunction, false)

function FILE (){
   let ourFile = document.getElementById('contFile')
   console.log(ourFile);
   debugger
   let files = ourFile.files;
   console.log(files);
   debugger
    document.querySelector('#contFile').onchange= function(e) {
        // let files = e.target.files; // FileList

        console.log(files);
        debugger

        console.log(files[0]);


        let reader = new FileReader();

        let data = reader.readAsBinaryString(files[0]);

        reader.onload = () => {
            console.log(this);
            console.log(reader);
        };
        console.log(data);
    };

}

// (function() {
//     document.querySelector('#contFile').onchange = function(e) {
//         let files = e.target.files; // FileList

//         console.log(files);
//         debugger

//         console.log(files[0]);


//         let reader = new FileReader();

//         let data = reader.readAsBinaryString(files[0]);

//         reader.onload = () => {
//             console.log(this);
//             console.log(reader);
//         };
//         console.log(data);
//     };
// })();


function readTxt (){
    let msgTxt = document.getElementById('msgSecret');


}

function read2bin (){
let reader = new FileReader();


}