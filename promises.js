const posts=[
{title : 'Post one', body : 'This is post1'},
{title : 'Post two', body : 'This is post2'}
];
function getpost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((i)=>{
            output+=`<li>${i.title}</li>`;
        });
        document.body.innerHTML= output;
    },1000)
}
const userdet = async()=>{
function createpost(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            posts.push(post);
            const err = false;
            if(!err){
                res('postpushed');
            }
            else{
                rej('Error is there');
            }
        },2000);
    });
}

// createpost({title : 'post3', blody : 'This is post3'}).then(()=>{
//     getpost();
// }).catch((err)=>{console.log(err)});

//Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((res,rej)=>{
// setTimeout(()=>{
//  res('Good bye');
// },2000)
// });
// const promise4 = fetch('')
// Promise.all([promise1,promise2,promise3]).then(val=>console.log(val));
function updateuseractivity(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const dates = new Date();
            res(`Last user activity updated at ${dates}`);
        },2000)
    })
}
let [pst,usrdet]= await Promise.all([createpost({title : 'username',body : 'newdateupdated'}),updateuseractivity()]);
return usrdet;
}
userdet().then(t=>console.log(t));
console.log(posts);
