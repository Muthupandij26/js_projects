const first = () => {
    return "I am first";
};

// const second = () => {
//     setTimeout(()=> {
//         return "it is second";
//     }, 2000);

// };

const second = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("i am second");
        },3000)
    })
}

const third = () => {
    return "I am Third";

}

const callMe = async () => {
    let value1 = first();
    console.log(value1);

    let value2 = await second();
    console.log(value2);

    let value3 = third();
    console.log(value3);
}

callMe();