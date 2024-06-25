
let users=[]

const handleCreate=()=>{
    const user={
        id:users.length+1,
        name:"Hamza Ahmad",
        email:"hamza@gmail.com",
        password:"123456789",
        phone:"03217846170",
        username:"hamza",
        website:"www.hamza.com",
        address:{
            city:"Faisalabad",street:"123",suite:"",zipcode:"3800",geo:{lat:"",lng:""}
        },
        company:{bs:"",catchPhrase:"",name:"hamza Private Limited Company"}


    }
    const isuserfound=users.find((check)=>{return check.email===users.email})

    // function check(){
    //     check.email===users.email

    // }

    // const isuserfound=users.find(element=>element.email===user.email)


    if(isuserfound){return shownotify("User Alreadt Exist","error")}
    users.push(user)
    shownotify("User Successfully Created","success")
    console.log(users);
}

const handleRead=()=>{
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
     return response.json()})
        
    .then((data)=>{
        console.log(data);
        users=data
    })
    
    .catch(err=>{
        console.error("ddsdssd")
    })
    
}

const handleConsole=()=>{
    console.log("user",users);
}

const shownotify=(msg,type)=>{
    let color=""
    if(type==="success"){
        color="linear-gradient(to right ,#1d976c,#93f9b9)"
    }

    else if(type==="error"){
        color="linear-gradient(to right ,#ed213a,#93291e)"
    }else{
        color="#000"
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
    }).showToast();

}

const handleUpdate=()=>{
const newpassword="newpassword"
const updateuser=users.map((user,i)=>{
    if(user.email==="hamza@gmail.com"){
        return {...user,password:newpassword}
    }
    else{
        return user
    }

})
users=updateuser
console.log(users)
shownotify("A user is Updated Successfully","success")

}

const handleDelete=()=>{
    const filteruser=users.filter((check)=>check.id!=5)
    users=filteruser
    shownotify("Successfully Deleted","success")
    console.log(users);
}


const handlefind=()=>{
    const isuserfound=users.find((check)=>check.email==="hamza@gmail.com")
    console.log(isuserfound)
}