方法1:  使用async和await

async function go(){
    for(let i=0;i<arr.length;i++){
        await Axios.get(arr[i]);
    }
}


方法2: 使用reduce


arr.reduce((pre,next)=>{
    return pre.then(()=>Axios.get(next));
},Promise.resolve())

解释: Promise.resolve作为reduce的初始值,第一次遍历的prev.then就是Promise.resolve.then()
    后面每次都要等待Axios.get返回的 promise到了成功值后,才去调用下一次的next