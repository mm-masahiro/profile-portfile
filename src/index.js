console.log("I'm masahiro!!");

import './css/styles.scss';
import './css/styles2.scss';


// document.getElementById('show').addEventListener('click',function(){
//     this.classList.toggle('open');
//     document.getElementById('list').classList.toggle('open');
// });

document.getElementById('show').addEventListener('click',function(){
    document.getElementById('list').classList.toggle('open');
});
