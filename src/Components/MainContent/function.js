

// export async function getter(getterTarget) {
//     let reply;

//     await fetch("https://url-shortner-yssy.onrender.com/api/" , {
//         method:"POST",
//         headers:{
//             "Content-Type": "application/x-www-form-urlencoded",
//         },

//         body: new URLSearchParams({
//             target: getterTarget,
//         }),
//     }).then((res) =>res.json()).then((json =>{
//         reply = json;
//         console.log("Fetched:" ,reply);
//     })   ).catch((err)=>{console.log("ERROR:",err)});


//     const base = "https://url-shortner-yssy.onrender.com/";
// const answer = `${base}${String(reply[0].answer)}`;
// console.log(answer);
// return answer;
    
// }


export async function getter(getterTarget) {
    try {
        const res = await fetch(
            "https://url-shortner-yssy.onrender.com/api/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    target: getterTarget,
                }),
            }
        );

        const reply = await res.json();

        console.log("Fetched:", reply);

        const answer = `https://url-shortner-yssy.onrender.com/${reply.shortUrl}`;

        console.log(answer);
        return answer;
    } catch (err) {
        console.error("ERROR:", err);
        return null;
    }
}