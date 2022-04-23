function inflationCalculator(){
    let inflationRate = document.querySelector('#InflationRate');
    let money = document.querySelector('#money');

    // Moramo da ih pretvorimo u FLOAT
    if(inflationRate == null) {
        inflationRate = NaN;
    }else{
        inflationRate = parseFloat(inflationRate.value);
    }

    console.log(inflationRate);
    
    if(money == null){
        money = NaN;
    }else{
        money = parseFloat(money.value);
    }

    // Godine
    let years = document.querySelector('#years');
    if(years == null){
        years = NaN;
    }else{
        years = parseFloat(years.value);
    }


    //Racunamo vrednost novca
    let worth = money + (money * (inflationRate/100));

    for(let i = 1; i < years; i++){
        worth += worth * (inflationRate/100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';

    if(isNaN(inflationRate)  || isNaN(money) || isNaN(years)){
        newElement.innerText = `Please fill all fields!`
    } else{
        newElement.innerText = `Today's ${money} € will worth ${worth}€ for ${years} years.`
    }

    document.querySelector('.container').appendChild(newElement);

}
