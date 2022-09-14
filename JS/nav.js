function navImpl(){



  var numImg = 0;

  let flag = false;
  document.getElementById("makeup").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("skincare").style.display = "none";
      document.getElementById("hair").style.display = "none";
      document.getElementById("tools").style.display = "none";
      document.getElementById("frag").style.display = "none";
      document.getElementById("brands").style.display = "none";
  
      document.getElementById("try").style.display = " block";
    } else {
      document.getElementById("try").style.display = "none";
    }
  });
  
  document.getElementById("skin").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("try").style.display = "none";
      document.getElementById("hair").style.display = "none";
      document.getElementById("tools").style.display = "none";
      document.getElementById("brands").style.display = "none";
      document.getElementById("frag").style.display = "none";
  
      document.getElementById("skincare").style.display = " block";
    } else {
      document.getElementById("skincare").style.display = "none";
    }
  });
  
  document.getElementById("fragnance").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("hair").style.display = "none";
      document.getElementById("skincare").style.display = "none";
      document.getElementById("try").style.display = "none";
      document.getElementById("tools").style.display = "none";
      document.getElementById("brands").style.display = "none";
  
      document.getElementById("frag").style.display = " block";
    } else {
      document.getElementById("frag").style.display = "none";
    }
  });
  
  document.getElementById("haircare").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("tools").style.display = "none";
      document.getElementById("skincare").style.display = "none";
      document.getElementById("try").style.display = "none";
      document.getElementById("brands").style.display = "none";
      document.getElementById("frag").style.display = "none";
  
      document.getElementById("hair").style.display = " block";
    } else {
      document.getElementById("hair").style.display = "none";
    }
  });
  
  document.getElementById("brush").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("skincare").style.display = "none";
      document.getElementById("try").style.display = "none";
      document.getElementById("frag").style.display = "none";
      document.getElementById("hair").style.display = "none";
  
      document.getElementById("brands").style.display = "none";
  
      document.getElementById("tools").style.display = " block";
    } else {
      document.getElementById("tools").style.display = "none";
    }
  });
  
  document.getElementById("brad").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag == true) {
      document.getElementById("skincare").style.display = "none";
      document.getElementById("try").style.display = "none";
      document.getElementById("frag").style.display = "none";
      document.getElementById("hair").style.display = "none";
      document.getElementById("tools").style.display = "none";
  
      document.getElementById("brands").style.display = " block";
    } else {
      document.getElementById("brands").style.display = "none";
    }
  });
  
  document.getElementById("btn").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == true) {
      document.getElementById("slight").style.transform = "translateX(0)";
    } else {
      document.getElementById("slight").style.transform = "translateX(-110%)";
    }
  });
  
  document.getElementById("clickBrand").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig1").style.display = "none";
      document.getElementById("rig2").style.display = "none";
      document.getElementById("rig3").style.display = "none";
      document.getElementById("rig4").style.display = "none";
      document.getElementById("rig5").style.display = "none";
  
      document.getElementById("rig").style.display = "block";
      document.getElementById("rig").style.transform = "translate(0)";
    } else {
      document.getElementById("rig").style.display = "none";
    }
  });
  
  document.getElementById("clickmen").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig2").style.display = "none";
      document.getElementById("rig3").style.display = "none";
      document.getElementById("rig4").style.display = "none";
      document.getElementById("rig5").style.display = "none";
      document.getElementById("rig").style.display = "none";
  
      document.getElementById("rig1").style.display = "block";
      document.getElementById("rig1").style.transform = "translate(0)";
    } else {
      document.getElementById("rig1").style.display = "none";
    }
  });
  
  document.getElementById("clickwomen").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig3").style.display = "none";
      document.getElementById("rig4").style.display = "none";
      document.getElementById("rig5").style.display = "none";
      document.getElementById("rig").style.display = "none";
      document.getElementById("rig1").style.display = "none";
  
      document.getElementById("rig2").style.display = "block";
      document.getElementById("rig2").style.transform = "translate(0)";
    } else {
      document.getElementById("rig2").style.display = "none";
    }
  });
  
  document.getElementById("clickkids").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig4").style.display = "none";
      document.getElementById("rig5").style.display = "none";
      document.getElementById("rig").style.display = "none";
      document.getElementById("rig1").style.display = "none";
      document.getElementById("rig2").style.display = "none";
  
      document.getElementById("rig3").style.display = "block";
      document.getElementById("rig3").style.transform = "translate(0)";
    } else {
      document.getElementById("rig3").style.display = "none";
    }
  });
  
  document.getElementById("clickoffers").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig5").style.display = "none";
      document.getElementById("rig").style.display = "none";
      document.getElementById("rig1").style.display = "none";
      document.getElementById("rig2").style.display = "none";
      document.getElementById("rig3").style.display = "none";
  
      document.getElementById("rig4").style.display = "block";
      document.getElementById("rig4").style.transform = "translate(0)";
    } else {
      document.getElementById("rig4").style.display = "none";
    }
  });
  
  document.getElementById("clicksef").addEventListener("click", () => {
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
  
    if (flag == false) {
      document.getElementById("rig").style.display = "none";
      document.getElementById("rig1").style.display = "none";
      document.getElementById("rig2").style.display = "none";
      document.getElementById("rig3").style.display = "none";
      document.getElementById("rig4").style.display = "none";
  
      document.getElementById("rig5").style.display = "block";
      document.getElementById("rig5").style.transform = "translate(0)";
    } else {
      document.getElementById("rig5").style.display = "none";
    }
  });
  
  
  document.getElementById("log").addEventListener("click",() =>{
      console.log("hoiii")
  document.getElementById("logIn").style.display = "block";
  
  })
  document.getElementById("cros").addEventListener("click",() =>{
  
  document.getElementById("logIn").style.display = "none";
  
  })
  
  document.getElementById("regii").addEventListener("click",()=>{
  
  document.getElementById("logIn").style.display = "none";
  document.getElementById("regIn").style.display = "block";
  
  })
  
  document.getElementById("logee").addEventListener("click",()=>{
  
  document.getElementById("regIn").style.display = "none";
  document.getElementById("logIn").style.display = "block";
  
  })
  
  document.getElementById("ciross").addEventListener("click",()=>{
  
  document.getElementById("regIn").style.display = "none"
  
  })
  
  
  


  document.getElementById("rekister").addEventListener("click", ()=>{
    signup();
  })
  
  async function signup() {
  try {
    var data = {
      name: document.getElementById("namer").value,
      phone: document.getElementById("phoner").value,
      email: document.getElementById("mailer").value,
      password: document.getElementById("passer").value,
      username: document.getElementById("namer").value,
      description: "So Gya Ye Jha",
    };

    data = JSON.stringify(data);
    let url = `http://127.0.0.1:5502/register`
    console.log(data);
    let response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    console.log(result);
    if(result.status=="Done"){
      alert("Registered Succesfully");
      document.getElementById("regIn").style.display = "none";
      document.getElementById("logIn").style.display = "block";
  }else if(result.status == "HalfDone"){ 
          alert(result.errors);
        }

  else{
      alert("Already Registered");
  }
  } catch (err) {
    console.log(err);
  }
}





  var userName = JSON.parse(localStorage.getItem("userName"));
  if(userName === null){ 

  }else{ 
    document.getElementById("handleBox").innerText = `Hi, ${userName}`;

  }
  console.log(userName);









  
  document.getElementById("cntnuu").addEventListener("click", (event) => {
    event.preventDefault();
    var data = {
      email: document.getElementById("yrUserName").value,
      password: document.getElementById("yrPassword").value,
    };
    data = JSON.stringify(data);
    

    fetch(`http://127.0.0.1:5502/login`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (res) {
      res.json().then(function (res) {
        console.log(res);
        if (res.status == "Done") {
          alert(`Login Succesful ${res.user.name}`);
          document.getElementById("logIn").style.display = "none";
          
          var userName = localStorage.setItem("userName",JSON.stringify(res.user.name));
          document.getElementById("handleBox").innerText = `Hi, ${res.user.name}`;


          var userToken = localStorage.setItem("userToken",JSON.stringify(res.token))  
        }
        
        else {
          alert("Wrong Credentials");
        }
      });
    });


    
  });




}

export default navImpl; 