
                                                // selectors
const sidebarIt = document.querySelector('.sidebarItems')
const formScreen = document.querySelector('.formScreen')
const phone = document.querySelector('.phone')
const form = document.querySelectorAll('.form')
const sidebar = document.querySelector('.sidebar')
let body = document.querySelector('.body')
let swal2 = document.querySelector('.swal2-confirm');

const DeleteAlert = ()=>{
    swal2.fire({
      title: 'Delete Record',
      text: "You Really Want To Delete?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if(result.isDismissed === true){
        return null;
      }else{
        DeleteStudent();
        window.location.reload();
      }
    })
}

                                        // retrive studentData from DB
const retrive = ()=>{
    let data = JSON.parse(localStorage.getItem('db')) || []
    return data
 }
                                    // retrive TeacherData from DBTeacher
const retriveTeacher = ()=>{
    let data = JSON.parse(localStorage.getItem('dbTeacher')) || []
    return data
}
                                      // retrive class Data from dbClass
const retriveClass = ()=>{
    let data = JSON.parse(localStorage.getItem('dbClass')) || []
    return data
}
                                               // edit methods
const EditStudent = (index)=>{
    changeInput(0)
    let data = JSON.parse(localStorage.getItem('db'))
    
    let Name = document.querySelector('.Name')
    let Father_name = document.querySelector('.Father_name')
    let Email = document.querySelector('.Email')
    let Phone = document.querySelector('.phone-1')
    let program = document.querySelector('.program')
    

    Name.value = data[index].name
    Father_name.value = data[index].fName
    Email.value = data[index].email
    Phone.value = data[index].phone
    program.value = data[index].program
    data.splice(index,1)

    localStorage.setItem('db',JSON.stringify(data))

    //window.location.reload()
}

const EditTeacher = (index)=>{
    changeInput(1)
    let data = JSON.parse(localStorage.getItem('dbTeacher'))
    
    let TName = document.querySelector('.TName')
    let TEmail = document.querySelector('.TEmail ')
    let TPhone = document.querySelector('.TPhone')
    let TProgram = document.querySelector('.TProgram')
    let Tsalary = document.querySelector('.Tsalary')
    
    console.log(TName, TEmail,TPhone, TProgram,Tsalary)

    TName.value = data[index].tname
    TEmail.value = data[index].temail
    TPhone.value = data[index].tphone
    TProgram.value = data[index].tprogram
    Tsalary.value = data[index].tsalary
    
    console.log(data.length)
    console.log(data)
    data.splice(index,1)
    
    console.log(data.length)
    console.log(data)
    localStorage.setItem('dbTeacher',JSON.stringify(data))

}

const EditClass = (index)=>{
    changeInput(2)
    let data = JSON.parse(localStorage.getItem('dbClass'))
    
    let Class = document.querySelector('.Class')
    let Timing = document.querySelector('.Timing ')
    let Teacher = document.querySelector('.Teacher')
    let Position = document.querySelector('.Position')


    Class.value = data[index].class
    Timing.value = data[index].time
    Teacher.value = data[index].teacher
    Position.value = data[index].position
    
    
    console.log(data.length)
    console.log(data)
    data.splice(index,1)
    
    console.log(data.length)
    console.log(data)
    localStorage.setItem('dbClass',JSON.stringify(data))
}
                                              // delete methods
const DeleteStudent = (index) =>{
    let data = retrive()
    data.splice(index, 1)
    localStorage.setItem('db', JSON.stringify(data))
    window.location.reload()
}
const DeleteTeacher = (index)=>{
    let data = retriveTeacher()
    data.splice(index, 1)
    localStorage.setItem('dbTeacher', JSON.stringify(data))
    window.location.reload()
}
const DeleteClass = (index)=>{
    let data = retriveClass()
    data.splice(index, 1)
    localStorage.setItem('dbClass', JSON.stringify(data))
    window.location.reload()
}

                                                // HTML arrays

const sidebarItem = [
    {
        name: '<i class="fa-solid fa-people-group"></i> Students',
        active: true,
    }, {
        name: '<i class="fa-solid fa-person"></i> Teacher',
        active: true,
    }, 
    {
        name: '<i class="fa-solid fa-landmark"></i>Classes',
        active: true,
    },
    {
        name: '<i class="fa-solid fa-tickets-airline"></i>addmision',
        active: true
    }

]
let ind;
const Screens = [
    {
        Screen: `<div class = "upper"><h1> Students </h1> <button class = "add-btn" onclick = "changeInput(0)">Add student</button></div>
        <input type = "text" class = "search" placeholder = "Search">
        <table class = "STable">
        <thead>
        <tr>
        <th>Name</th>
        <th>Father Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Class</th>
        <th>Action</th>
        <th>fee</th>
        </tr>
        </thead> 
        <tbody id = "tbody">
        ${
            retrive().map((item,index)=>{
                
                return(
                    `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.fName}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.program}</td>
                        <td><i onclick = "EditStudent(${index})"class="fa-solid fa-pen"></i> <i onclick = "DeleteStudent(${index})" class="fa-solid fa-trash-can"></i> </td>
                        <td>${item.payment === true? `<p>payed</p>` :`<p>Not payed</p>`}</td>
                        </tr>
                `
                )
              
            })
            
        }
        </tbody>
        </table>  
     
        `,
        form:`<div class = "form-input">
        <div class = "inputBox">
        <input type = "text" class="Name" placeholder="Name" required>
        <input type = "text" class="Father_name" placeholder = "Father Name" required>
        <input type = "text" class="Email" placeholder = "Email" required>
        <input type = "text" class="phone-1" placeholder = "phone" required>
        <input type="text" class="program" placeholder="Class" required>
        </div>
        <button class = "submit" onclick = "SaveDataStudent(0)"> Add Student </button>
        </div>`,
    },
    {
        Screen: `<input type = "text" class = "search" placeholder = "Search"><div class = "upper"><h1> Teachers </h1> <button class = "add-btn" onclick = "changeInput(1)">Add Teacher</button></div>
        <table class = "TTable">
        <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Program</th>
        <th>Salary</th>
        <th>action</th>
        </tr>
        </thead>
        <tbody>
        ${
            retriveTeacher().map((item,index) =>{
                return(
                    `<tr>
                        <td>${item.tname}</td>
                        <td>${item.temail}</td>
                        <td>${item.tphone}</td>
                        <td>${item.tprogram}</td>
                        <td>${item.tsalary}</td>
                        <td><i onclick = "EditTeacher(${index})"class="fa-solid fa-pen"></i> <i onclick = "DeleteTeacher(${index})" class="fa-solid fa-trash-can"></i> </td>
                    </tr>`
                )
            })
        }
        </tbody>
        </table>`,
        form: `<div class = "form-input">
        <div class = "inputBox">
        <input class = "TName" type = "text" placeholder = "Name">
        <input class = "TEmail" type = "text" placeholder = "Email" >
        <input class = "TPhone" type = "text" placeholder = "phone" >
        <input class = "TProgram" type = "text" placeholder = "program" >
        <input class = "Tsalary" type = "text" placeholder = "Salary" >
        </div>
        <button class = "submit" onclick = "SaveDataTeacher(1)" > Add Teacher </button>
        </div>`,
    },
    {
        Screen: `
        <input type = "text" class = "search" placeholder = "Search"><div class = "upper"><h1> classes </h1> <button class = "add-btn" onclick = "changeInput(2)">Add class</button></div>
        <table class = "CTable">
        <thead>
        <tr>
        <th>Class</th>
        <th>timing</th>
        <th>Teacher</th>
        <th>position</th>
        </tr>
        </thead>
        <tbody>
       
        ${
            retriveClass().map((item,index) =>{
                return(
                    `<tr>
                        <td>${item.class}</td>
                        <td>${item.time}</td>
                        <td>${item.teacher}</td>
                        <td>${item.position}</td>
                        <td><i onclick = "EditClass(${index})"class="fa-solid fa-pen"></i> <i onclick = "DeleteClass(${index})" class="fa-solid fa-trash-can"></i> </td>

                    </tr>`
                )
            })
        }
       </tbody>
        </table>
        `,
        form: `<div class = "form-input">
        <div class = "inputBox">
        <input class = "Class" type = "text" placeholder = "Class">
        <input class = "Timing" type = "text" placeholder = "Timeing">
        <input class = "Teacher" type = "text" placeholder = "Teacher" >
        <input class = "Position" type = "text" placeholder = "Position" >
        </div>
        <button class = "submit" onclick = "SaveDataClass(2)" > Add Class </button>
        </div>`,
    },
    {
        Screen: `

        <div class = "admitForm">
        <h1>Student Admission</h1>
        <div class = "inputBox">
        <select onchange = "changeData(value);" class = "select">
            ${retrive().map((item,index)=>{

               return(
                   `<option value = ${index}>${item.name}</option>`
               )
            })} 
        </select>
        <input class = "LastName" type = "text" placeholder = "Father Name">
        <input class = "Email" type = "text" placeholder = "Email" >
        <input class = "Phone" type = "text" placeholder = "Phone" >
        <input class = "Class" type = "text" placeholder = "Class" >
        </div>
        <button class = "submit" onclick = "updateStudent()" > submit </button>
        </div>
        `,
        form: 
        ``
    }
]

const updateStudent = ()=>{
    let data =  retrive()

    console.log(data)
    
    if(data[ind].payment){
        alert(`admission for ${data[ind].name} is done already`)
    }
    else{
        data[ind].payment = true
        localStorage.setItem('db', JSON.stringify(data))
        alert('inserted')
    }
        window.location.reload()
    
}

const changeData = (index)=>{
    ind = index
    const submit = document.querySelector('submit')
    const LName = document.querySelector('.LastName')
    const Email = document.querySelector('.Email')
    const Phone = document.querySelector('.Phone')
    const Class = document.querySelector('.Class')
    let data = retrive()
    LName.value = data[index].fName
    Email.value = data[index].email
    Phone.value = data[index].phone
    Class.value = data[index].program
}
                                      // inserting SCREENS TO HTML

const InsertScreen = (index)=>{
   
    body.innerHTML = ''
    
    Screens.map((item, ScreenIndex)=>{
        
        body.innerHTML += `<div class="form formScreen  ${index === ScreenIndex? 'show': 'hide'}">
                 ${item.Screen}
                 </div>`
                 
    })
    
}
                                      // one way of swaping screens not used
display = (index)=>{
    //console.log(index)
    
    form.forEach((item)=>{
        item.classList.remove('show')
        item.classList.add('hide')
    })
    
    form[index].classList.add('show')
    
}
                                        // another way of changing screens
let stutus = true
changeInput = (index)=>{

    body.innerHTML = ''
    stutus ? body.innerHTML = `<div class="form formScreen'}">
    ${Screens[index].form}
    </div>`
    : body.innerHTML = `<div class="form formScreen show'}">
    ${Screens[index].Screen}
    </div>`
    
    stutus = !stutus
}
                                             //save datas into DBs
const SaveDataClass=(index)=>{

    let className = document.querySelector('.Class')
    let Time = document.querySelector('.Timing')
    let Teacher = document.querySelector('.Teacher')
    let Position = document.querySelector('.Position')

    if(className.value !== '' && Time.value !== '' && Teacher.value !== '' && Position.value !== '' ){
        let Classes =
        {
            class: className.value,
            time: Time.value,
            teacher: Teacher.value,
            position: Position.value,
        }
    

    let getdata = JSON.parse(localStorage.getItem('dbClass')) || []
    getdata.push(Classes)
    localStorage.setItem('dbClass', JSON.stringify(getdata))
    changeInput(index)
    }
    else{
        stutus = true
        alert('please fill all the fields')
    }
    
}

const SaveDataStudent=(index)=>{

    let Name = document.querySelector('.Name')
    let Father_name = document.querySelector('.Father_name')
    let Email = document.querySelector('.Email')
    let Phone = document.querySelector('.phone-1')
    let program = document.querySelector('.program')
    let count = 0;
    if(Name.value !== '' && Father_name.value != '' && Email.value !== '' && Phone.value !== '' && program.value !== ''){
        let data = retriveClass()
        let student
        data.map((item) =>{
            if(item.class === program.value){
                
                student =
                {
                    name: Name.value,
                    fName: Father_name.value,
                    email: Email.value,
                    phone: Phone.value,
                    program: program.value,
                    payment: false
                }
                let getdata = JSON.parse(localStorage.getItem('db')) || []
                getdata.push(student)
                localStorage.setItem('db', JSON.stringify(getdata))
                window.location.reload()
                changeInput(index)
                window.location.reload(false)
                count++;
            }
            return 0;
         })
        if(count == 0 ){
            alert('class not avialable')
        }
    }
    else{
        stutus = true
        alert('please fill all the fields')
    }
    
}

const SaveDataTeacher=(index)=>{

    let Name = document.querySelector('.TName')
    let Email = document.querySelector('.TEmail')
    let Phone = document.querySelector('.TPhone')
    let Program = document.querySelector('.TProgram')
    let salary = document.querySelector('.Tsalary')
    if(Name.value !== '' && Email.value !== '' && Phone.value !== ''  && Program.value !== '' && salary.value !== ''){
        let Teacher =
        {
            tname: Name.value,
            temail: Email.value,
            tphone: Phone.value,
            tprogram: Program.value,
            tsalary: salary.value
        }
    

    let getdata = JSON.parse(localStorage.getItem('dbTeacher')) || []
    getdata.push(Teacher)
    localStorage.setItem('dbTeacher', JSON.stringify(getdata))
    
    changeInput(index)
    window.location.reload(false)
    }
    else{
        stutus = true
        alert('please fill all the fields')
    }
    
}
                                          // inserting the screen
const activate = ()=>{
    
    
    sidebarItem.map( (item, index)=>{
    
        
        sidebarIt.innerHTML +=  `
        <div class = "${item.active ? 'active' : 'inactive'} spans" onclick ="InsertScreen(${index})">
        <span>${item.name}</span>
        </div>`
    })

}
InsertScreen(0)
activate()








