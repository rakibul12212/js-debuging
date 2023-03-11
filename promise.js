const getData = new Promise((resolve, reject) => {
        //resolve(566665);
        //reject('no data avilable')
        const num = Math.random() * 10;
        console.log(num);
        if (num < 5) {
            resolve(566665);
        } else {
            reject('no data avilable');
        }
    })
    //console.log(getData); //evave dile object akare ashbe
getData.then(data => console.log(data + 56))
    .catch(err => console.error('err:', err))