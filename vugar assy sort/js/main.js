function sortingArray(){

    for (let i = 0; i < arr.length; i++) {
        min=i;
    for (let j= i+1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
    
           min=j;
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
    }
         return arr;
    }
    console.log(sortingArray(arr=[3,5,2,1,8,9]));
    
    
    const Yahya = {
        name: "Yahya",
        point: 81,
    }
    const Sevda = {
        name: "Sevda",
        point: 77,
    }
    const Hemide = {
        name: "Hemide",
        point: 83,
    }
    const Anar = {
        name: "Anar",
        point: 51,
    }
    const Aysun = {
        name: "Aysun",
        point: 66,
    }
    arr = [Anar, Aysun, Hemide, Sevda,Yahya];
   
    function getDiplomDegree(value){
        if ((value<=100)&&(value>90)) {
            for (let i = 0; i < arr.length; i++) {
                if ((arr[i].point<=100)&&(arr[i].point>90)) {
                   console.log(arr[i].name ," -Yüksək Şərəf Diplomu"); 
                }
            }
        }
        else if ((value<=90)&&(value>80)) {
            for (let i= 0; i < arr.length; i++) {
                if ((arr[i].point<=90)&&(arr[i].point>80)) {
                   console.log(arr[i].name ," - Şərəf Diplomu"); 
                }
            }
        }
            if ((value<=80)&&(value>70)) {
                for (let i= 0; i < arr.length; i++) {
                    if ((arr[i].point<=80)&&(arr[i].point>70)) {
                                console.log(arr[i].name ," - Şərəf Diplomu"); 
                    }
                }}
                 if ((value<=70)&&(value>60)) {
                    for (let i= 0; i < arr.length; i++) {
                        if ((arr[i].point<=70)&&(arr[i].point>60)) {
                           console.log(arr[i].name ," - Adi Diplom"); 
                        }
                    }}
                    if ((value<=60)&&(value>50)) {
                        for (let i= 0; i < arr.length; i++) {
                            if ((arr[i].point<=70)&&(arr[i].point>60)) {
                               console.log(arr[i].name ," - Adi Diplom"); 
                            }
                        }}
                        if ((value<=50)&&(value>=0)) {
                            for (let i= 0; i < arr.length; i++) {
                                if ((arr[i].point<=70)&&(arr[i].point>60)) {
                                   console.log(arr[i].name ," - Adi Diplom"); 
                                }
                            }
                        }
                    }
    getDiplomDegree(92);
    getDiplomDegree(52);