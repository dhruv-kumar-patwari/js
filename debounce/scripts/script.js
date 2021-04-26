
let counter = 1;

function getData(){
    console.log(`Fetching data ..... ${counter}`)
    counter++;
}

function debounce(getData, delay){

    let timer;

    return function(){
        let context = this, args=arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, delay)

    }
}

const callApi = debounce(getData, 1000)