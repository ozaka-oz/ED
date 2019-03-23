$('#num').animate({ num: 90 - 3/* - начало */ }, {
    duration: 5000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(2)
    }
});