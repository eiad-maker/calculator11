function insert(num) {
    let mystring = document.form.textview.value;
    let lastchars = mystring[mystring.length - 1];
    if (mystring.length < 30) {
        if (!isNaN(lastchars) || lastchars === null || !isNaN(num)) {
            document.form.textview.value = mystring + num;
        } else if (num != lastchars) {
            document.form.textview.value = mystring.replace(lastchars, num);
        }
    }
}
function equal() {
    let sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum);
    }
}
function clean() {
    document.form.textview.value='';
}
function back() {
    let exp = document.form.textview.value
    document.form.textview.value=exp.substring(0,exp.length-1)
}