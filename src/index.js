console.log("I'm masahiro!!");

import { hoge } from "./sub";

import './css/styles.scss';
import './css/styles2.scss';


document.getElementById('show').addEventListener('click', function(){
    this.classList.toggle('open');
    document.getElementById('list').classList.toggle('open');
});
