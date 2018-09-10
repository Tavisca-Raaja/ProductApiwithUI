function GetAvailableCars()
{
    var root=document.getElementById("root");
    root.innerHTML="";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var car = JSON.parse(this.response);
        car.forEach(function (element)
        {
          var Display=document.createElement("div");
          Display.className="select";
          var nameContainer=document.createElement("p");
          var name=document.createTextNode("Name:"+element.Name);
          nameContainer.appendChild(name);
          root.appendChild(nameContainer);
            
          var IdContainer=document.createElement("p");
          var Id=document.createTextNode("Id:"+element.Id);
          IdContainer.appendChild(Id);
          Display.appendChild(IdContainer); 
          root.appendChild(Display);
            
          var sourceContainer=document.createElement("p");
          var source=document.createTextNode("source:"+element.Source);
          sourceContainer.appendChild(source);
          Display.appendChild(sourceContainer); 
          root.appendChild(Display);
            
          var destinationContainer=document.createElement("p");
          var dest=document.createTextNode("Destination:"+element.Destination);
          destinationContainer.appendChild(dest);
          Display.appendChild(destinationContainer);
          root.appendChild(Display);

          var priceContainer=document.createElement("p");
          var price=document.createTextNode("price:"+element.Price);
          priceContainer.appendChild(price);
          Display.appendChild(priceContainer); 
          root.appendChild(Display);
          
          var savebutton=document.createElement("button");
          savebutton.innerHTML="SaveCar";
          savebutton.setAttribute("data-target", element.Id);
          savebutton.onclick= function() {
            var xhttp = new XMLHttpRequest();
            var id = this.getAttribute("data-target");
             xhttp.onreadystatechange = function() {
               console.log(this.readyState);
               console.log(this.status);
               if (this.readyState == 4 && this.status == 200){
                     console.log("Updated");
                 }
            }
              xhttp.open("Put", "http://localhost:54976/api/Car/SaveCar/"+id, true);
              xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
              xhttp.send(); 
          }
          root.appendChild(savebutton);
            
          var Bookbutton=document.createElement("button");
          Bookbutton.innerHTML="BookCar";
          Bookbutton.setAttribute("data-target", element.Id);
          Bookbutton.onclick= function() {
            var xhttp = new XMLHttpRequest();
             var id = this.getAttribute("data-target");
             xhttp.onreadystatechange = function() {
                 console.log(this.readyState);
                 console.log(this.status);
                if (this.readyState == 4 && this.status == 200){
                     console.log("Updated");
                 }
            }
              xhttp.open("Put", "http://localhost:54976/api/Car/BookCar/"+id, true);
              xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
              xhttp.send(); 
          }
          root.appendChild(Bookbutton);
            
          var line=document.createElement("Hr");
          root.appendChild(line);
          
        });  
        
      }    
    };
  xhttp.open("GET", "http://localhost:54976/api/Car", true);
  xhttp.send();
}

function GetAvailableFlights()
{
     var root=document.getElementById("root");
     var xhttp = new XMLHttpRequest();
     root.innerHTML="";
     xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200)
      {
        var Flight = JSON.parse(this.response);
        Flight.forEach(function (element)
        {
          var Display=document.createElement("div");
          Display.className="select";
          var nameContainer=document.createElement("p");
          var name=document.createTextNode("FlightName:"+element.Name);
          nameContainer.appendChild(name);
          root.appendChild(nameContainer);
            
          var IdContainer=document.createElement("p");
          var Id=document.createTextNode("Id:"+element.Id);
          IdContainer.appendChild(Id);
          Display.appendChild(IdContainer); 
          root.appendChild(Display);
            
          var sourceContainer=document.createElement("p");
          var source=document.createTextNode("source:"+element.Source);
          sourceContainer.appendChild(source);
          Display.appendChild(sourceContainer); 
          root.appendChild(Display);
            
          var destinationContainer=document.createElement("p");
          var dest=document.createTextNode("Destination:"+element.Destination);
          destinationContainer.appendChild(dest);
          Display.appendChild(destinationContainer);
          root.appendChild(Display);
            
          var sourceContainer=document.createElement("p");
          var DepartureDate=document.createTextNode("DepartureDate:"+element.DepartureDate);
          sourceContainer.appendChild(DepartureDate);
          Display.appendChild(sourceContainer); 
          root.appendChild(Display);
            
          var destinationContainer=document.createElement("p");
          var dest=document.createTextNode("ArrivalDate:"+element.ArrivalDate);
          destinationContainer.appendChild(dest);
          Display.appendChild(destinationContainer);
          root.appendChild(Display);

          var priceContainer=document.createElement("p");
          var price=document.createTextNode("price:"+element.Price);
          priceContainer.appendChild(price);
          Display.appendChild(priceContainer); 
          root.appendChild(Display);
            
          var savebutton=document.createElement("button");
          savebutton.innerHTML="SaveFlight";
          savebutton.setAttribute("data-target", element.Id);
          savebutton.onclick= function() {
            var xhttp = new XMLHttpRequest();
            var id = this.getAttribute("data-target");
             xhttp.onreadystatechange = function() {
               console.log(this.readyState);
               console.log(this.status);
               if (this.readyState == 4 && this.status == 200){
                     console.log("Updated");
                 }
            }
              xhttp.open("Put", "http://localhost:54976/api/Air/SaveFlight/"+id, true);
              xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
              xhttp.send(); 
          }
          root.appendChild(savebutton);
            
          var Bookbutton=document.createElement("button");
          Bookbutton.innerHTML="BookFlight";
          Bookbutton.setAttribute("data-target", element.Id);
          Bookbutton.onclick= function() {
            var xhttp = new XMLHttpRequest();
             var id = this.getAttribute("data-target");
             xhttp.onreadystatechange = function() {
                 console.log(this.readyState);
                 console.log(this.status);
                if (this.readyState == 4 && this.status == 200){
                     console.log("Updated");
                 }
            }
              xhttp.open("Put", "http://localhost:54976/api/Air/BookFlight/"+id, true);
              xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
              xhttp.send(); 
          }
          root.appendChild(Bookbutton);
          var line=document.createElement("Hr");
          root.appendChild(line);
          
        }); 
    }
  };
  xhttp.open("GET", "http://localhost:54976/api/Air", true);
  xhttp.send();
}
function GetAvailableActivity()
{
            var root=document.getElementById("root");
            var xhttp = new XMLHttpRequest();
            root.innerHTML="";
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var Activity = JSON.parse(this.response);
            Activity.forEach(function (element)
            {
              var Display=document.createElement("div");
              Display.className="select";
              var nameContainer=document.createElement("p");
              var name=document.createTextNode("ActivityName:"+element.Name);
              nameContainer.appendChild(name);
              root.appendChild(nameContainer);

              var IdContainer=document.createElement("p");
              var Id=document.createTextNode("Id:"+element.Id);
              IdContainer.appendChild(Id);
              Display.appendChild(IdContainer); 
              root.appendChild(Display);

              var sourceContainer=document.createElement("p");
              var source=document.createTextNode("Location:"+element.Location);
              sourceContainer.appendChild(source);
              Display.appendChild(sourceContainer); 
              root.appendChild(Display);

              var destinationContainer=document.createElement("p");
              var dest=document.createTextNode("Duration:"+element.Duration);
              destinationContainer.appendChild(dest);
              Display.appendChild(destinationContainer);
              root.appendChild(Display);

              var priceContainer=document.createElement("p");
              var price=document.createTextNode("price:"+element.Price);
              priceContainer.appendChild(price);
              Display.appendChild(priceContainer); 
              root.appendChild(Display);
                
              var savebutton=document.createElement("button");
              savebutton.innerHTML="SaveActivity";
              savebutton.setAttribute("data-target", element.Id);
              savebutton.onclick= function() {
                var xhttp = new XMLHttpRequest();
                var id = this.getAttribute("data-target");
                 xhttp.onreadystatechange = function() {
                   console.log(this.readyState);
                   console.log(this.status);
                   if (this.readyState == 4 && this.status == 200){
                         console.log("Updated");
                     }
                }
                  xhttp.open("Put", "http://localhost:54976/api/Activity/SaveActivity/"+id, true);
                  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
                  xhttp.send(); 
              }
              root.appendChild(savebutton);

              var Bookbutton=document.createElement("button");
              Bookbutton.innerHTML="BookActivity";
              Bookbutton.setAttribute("data-target", element.Id);
              Bookbutton.onclick= function() {
                var xhttp = new XMLHttpRequest();
                 var id = this.getAttribute("data-target");
                 xhttp.onreadystatechange = function() {
                     console.log(this.readyState);
                     console.log(this.status);
                    if (this.readyState == 4 && this.status == 200){
                         console.log("Updated");
                     }
                }
                  xhttp.open("Put", "http://localhost:54976/api/Activity/BookActivity/"+id, true);
                  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
                  xhttp.send(); 
              }
              root.appendChild(Bookbutton);
                
              var line=document.createElement("Hr");
              root.appendChild(line);

            }); 
      }
  };
 xhttp.open("GET", "http://localhost:54976/api/Activity", true);
 xhttp.send();
}
function GetAvailableHotel()
{
   
         var root=document.getElementById("root");
         var xhttp = new XMLHttpRequest();
         root.innerHTML="";
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
         var Hotel = JSON.parse(this.response);
        Hotel.forEach(function (element)
        {
          var Display=document.createElement("div");
          Display.className="select";
          var nameContainer=document.createElement("p");
          var name=document.createTextNode("HotelName:"+element.Name);
          nameContainer.appendChild(name);
          root.appendChild(nameContainer);
            
          var IdContainer=document.createElement("p");
          var Id=document.createTextNode("Id:"+element.Id);
        
          IdContainer.appendChild(Id);
          Display.appendChild(IdContainer); 
          root.appendChild(Display);
            
          var sourceContainer=document.createElement("p");
          var source=document.createTextNode("Location:"+element.Location);
          sourceContainer.appendChild(source);
          Display.appendChild(sourceContainer); 
          root.appendChild(Display);
            
          var destinationContainer=document.createElement("p");
          var dest=document.createTextNode("CheckIn:"+element.CheckIn);
          destinationContainer.appendChild(dest);
          Display.appendChild(destinationContainer);
          root.appendChild(Display);
            
          var priceContainer=document.createElement("p");
          var price=document.createTextNode("checkout:"+element.CheckOut);
          priceContainer.appendChild(price);
          Display.appendChild(priceContainer); 
          root.appendChild(Display);
            
          var priceContainer=document.createElement("p");
          var price=document.createTextNode("price:"+element.Price);
          priceContainer.appendChild(price);
          Display.appendChild(priceContainer); 
          root.appendChild(Display);
            
            var savebutton=document.createElement("button");
              savebutton.innerHTML="Save";
              savebutton.setAttribute("data-target", element.Id);
              savebutton.onclick= function() {
                var xhttp = new XMLHttpRequest();
                var id = this.getAttribute("data-target");
                 xhttp.onreadystatechange = function() {
                   console.log(this.readyState);
                   console.log(this.status);
                   if (this.readyState == 4 && this.status == 200){
                         console.log("Updated");
                     }
                }
                  xhttp.open("Put", "http://localhost:54976/api/Hotel/SaveHotel/"+id, true);
                  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
                  xhttp.send(); 
              }
              root.appendChild(savebutton);

              var Bookbutton=document.createElement("button");
              Bookbutton.innerHTML="Book";
              Bookbutton.setAttribute("data-target", element.Id);
              Bookbutton.onclick= function() {
                var xhttp = new XMLHttpRequest();
                 var id = this.getAttribute("data-target");
                 xhttp.onreadystatechange = function() {
                     console.log(this.readyState);
                     console.log(this.status);
                    if (this.readyState == 4 && this.status == 200){
                         console.log("Updated");
                     }
                }
                  xhttp.open("Put", "http://localhost:54976/api/Hotel/BookHotel/"+id, true);
                  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
                  xhttp.send(); 
              }
              
              root.appendChild(Bookbutton);
         var line=document.createElement("Hr");
         root.appendChild(line);
        });
    }
  };
  xhttp.open("GET", "http://localhost:54976/api/Hotel", true);
  xhttp.send();
}

//Update New Activity
function updateActivity()
{
    console.log(1)
    json = {
       "Name":document.getElementsByClassName("Activity")[0].value,
       "Location":document.getElementsByClassName("Activity")[1].value,
       "FromDate":document.getElementsByClassName("Activity")[2].value,
       "ToDate":document.getElementsByClassName("Activity")[3].value,
       "Price":document.getElementsByClassName("Activity")[4].value,
       "Duration":document.getElementsByClassName("Activity")[5].value,
       "IsBooked":"0",
       "IsSaved":"0"
    }
    json=JSON.stringify(json);
     var xhttp = new XMLHttpRequest();
    console.log(json)
     xhttp.onreadystatechange = function() {
         console.log(this.status);
         if (this.readyState == 4 && this.status == 200){
             console.log("Updated");
         }
    }
  xhttp.open("Post", "http://localhost:54976/api/Activity", true);
  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
  xhttp.send(json); 
}


//Update New Hotel
function updateHotel()
{
    json = {
       "Name":document.getElementsByClassName("Hotel")[0].value,
       "Location":document.getElementsByClassName("Hotel")[1].value,
       "CheckIn":document.getElementsByClassName("Hotel")[2].value,
       "CheckOut":document.getElementsByClassName("Hotel")[3].value,
       "Price":document.getElementsByClassName("Hotel")[4].value,
       "IsBooked":"0",
       "IsSaved":"0"
    }
    json=JSON.stringify(json);
     var xhttp = new XMLHttpRequest();
    console.log(json)
     xhttp.onreadystatechange = function() {
         console.log(this.status);
         if (this.readyState == 4 && this.status == 200){
             console.log("Updated");
         }
    }
  xhttp.open("Post", "http://localhost:54976/api/Hotel", true);
  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
  xhttp.send(json); 
}

//Update New Car
function updateCar()
{
    console.log(1)
    json = {
       "Name":document.getElementsByClassName("Car")[0].value,
       "Model":document.getElementsByClassName("Car")[1].value,
       "Source":document.getElementsByClassName("Car")[2].value,
       "Destination":document.getElementsByClassName("Car")[3].value,
       "FromDate":document.getElementsByClassName("Car")[4].value,
       "ToDate":document.getElementsByClassName("Car")[5].value,
       "Price":document.getElementsByClassName("Car")[6].value,
       "IsBooked":"0",
       "IsSaved":"0"
    }
    json=JSON.stringify(json);
     var xhttp = new XMLHttpRequest();
    console.log(json)
     xhttp.onreadystatechange = function() {
         console.log(this.status);
         if (this.readyState == 4 && this.status == 200){
             console.log("Updated");
         }
    }
  xhttp.open("Post", "http://localhost:54976/api/Car", true);
  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
  xhttp.send(json); 
}

//Update New Flight
function updateAir()
{
 
    json = {
       "Name":document.getElementsByClassName("Air")[0].value,
       "Source":document.getElementsByClassName("Air")[1].value,
       "Destination":document.getElementsByClassName("Air")[2].value,
       "DepartureDate":document.getElementsByClassName("Air")[3].value,
       "DepartureTime":document.getElementsByClassName("Air")[4].value,
       "ArrivalDate":document.getElementsByClassName("Air")[5].value,
       "ArrivalTime":document.getElementsByClassName("Air")[6].value,
       "Price":document.getElementsByClassName("Air")[7].value,
       "IsBooked":"0",
       "IsSaved":"0"
    }
    json=JSON.stringify(json);
     var xhttp = new XMLHttpRequest();
    console.log(json)
     xhttp.onreadystatechange = function() {
         console.log(this.status);
         if (this.readyState == 4 && this.status == 200){
             console.log("Updated");
         }
    }
  xhttp.open("Post", "http://localhost:54976/api/Air", true);
  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
  xhttp.send(json); 
}


function MakeCarVisible()
{
     document.getElementsByClassName("CarContainer")[0].style.display="block";
     document.getElementsByClassName("ActivityContainer")[0].style.display="None";
     document.getElementsByClassName("AirContainer")[0].style.display="None";
     document.getElementsByClassName("HotelContainer")[0].style.display="None";
}
function MakeActivityVisible()
{
     document.getElementsByClassName("CarContainer")[0].style.display="None";
     document.getElementsByClassName("ActivityContainer")[0].style.display="block";
     document.getElementsByClassName("AirContainer")[0].style.display="None";
     document.getElementsByClassName("HotelContainer")[0].style.display="None";
}
function MakeHotelVisible()
{
     document.getElementsByClassName("CarContainer")[0].style.display="None";
     document.getElementsByClassName("ActivityContainer")[0].style.display="None";
     document.getElementsByClassName("AirContainer")[0].style.display="None";
     document.getElementsByClassName("HotelContainer")[0].style.display="block";
}
function MakeAirVisible()
{
     document.getElementsByClassName("CarContainer")[0].style.display="None";
     document.getElementsByClassName("ActivityContainer")[0].style.display="None";
     document.getElementsByClassName("AirContainer")[0].style.display="block";
     document.getElementsByClassName("HotelContainer")[0].style.display="None";
}


function saveCar()
{
     var xhttp = new XMLHttpRequest();
     console.log(json)
     xhttp.onreadystatechange = function() {
      console.log(this.status);
        if (this.readyState == 4 && this.status == 200){
             console.log("Updated");
         }
    }
    var id=document.getElementsByClassName("Air")
  xhttp.open("Put", "http://localhost:54976/api/Air", true);
  xhttp.setRequestHeader("Content-type","application/json; charset=utf-8");
  xhttp.send(json); 
}