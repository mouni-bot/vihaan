const firebaseConfig = {
  apiKey: "AIzaSyBCbOJlkCxh3R5cuOaoN6htSi_dY8aHWUk",
  authDomain: "mounika-lifs.firebaseapp.com",
  databaseURL: "https://mounika-lifs-default-rtdb.firebaseio.com",
  projectId: "mounika-lifs",
  storageBucket: "mounika-lifs.appspot.com",
  messagingSenderId: "633950673308",
  appId: "1:633950673308:web:613a1795294f21acd55059"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
