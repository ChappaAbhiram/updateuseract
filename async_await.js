console.log('person1 shows ticket');
console.log('person 2 shows ticket');
/*const promwifebringtickets = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('ticket');
    },3000);
})
const getpopcorn = promwifebringtickets.then((t)=>{
    console.log('going to get popcorn');
    return new Promise((res,rej)=>{
     res(`${t} popcorn`);
    })
});
const addbutter = getpopcorn.then((t)=>{
console.log('going to add butter');
    return new Promise((res,rej)=>{
        res(`${t} butter`);
    })
})
*/
const premovie = async()=>{
    const promwifebringtickets = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('ticket');
        },3000);
    });
    const getpopcorn = new Promise((res,rej)=>{
         res(`popcorn`);
        });
    const addbutter =  new Promise((res,rej)=>{
        res(`butter`);
        });
    const getdrinksbyhusband = new Promise((res,rej)=>{
        res('colddrinkbyhusband');
    })
    const getcandybywife = new Promise((res,rej)=>{
        res('candy by wife');
    });
    let ticket = await promwifebringtickets;
    console.log(`got the ${ticket} going to get popcorn`);
    let popcorn = await getpopcorn;
    console.log(`got some ${popcorn} going to add butter`);
    let butter = await addbutter;
    console.log(`got some ${butter}`);
    let [drinks,candybywife]= await Promise.all([getdrinksbyhusband,getcandybywife]);
    console.log(`${drinks},${candybywife}`);

    return ticket;
}
premovie().then(m=>console.log(`person3 shows ${m} and entering theater`));
console.log('person4 shows ticket');
console.log('person5 shows ticket');