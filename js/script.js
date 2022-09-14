function changable() {
    document.getElementById("demo").innerHTML = "Paragraph Changed.";
}

function fun1() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttl=document.getElementById('ttl');
    var ttr=document.getElementById('ttr');
    var tbr=document.getElementById('tbr');
    var tbl=document.getElementById('tbl');

    var blocker = document.getElementById('blocker');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    blocker.style.borderRadius= rtl+ 'px ' +rtr + 'px '+ rbr +'px ' +rbl+ 'px ';

    console.log('blocker')
}