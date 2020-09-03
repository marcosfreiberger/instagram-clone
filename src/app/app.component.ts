import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-clone';

  ngOnInit(): void {

    var firebaseConfig = {
      apiKey: "AIzaSyANLo5ebj3Tz57xbpKvamgHgXZlaeicvjE",
      authDomain: "jta-instagram-clone-fc4ce.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-fc4ce.firebaseio.com",
      projectId: "jta-instagram-clone-fc4ce",
      storageBucket: "jta-instagram-clone-fc4ce.appspot.com",
      messagingSenderId: "77764267081",
      appId: "1:77764267081:web:70b452473048ff1b65c398",
      measurementId: "G-SMQM7ND0XZ"
    };

    firebase.initializeApp(firebaseConfig)
  }
}
