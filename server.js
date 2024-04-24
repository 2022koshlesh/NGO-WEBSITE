// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const port = 3000;

// const home = fs.readFileSync(path.join(__dirname, 'index.html'));
// const s1= fs.readFileSync(path.join(__dirname, 'style.css'));
// const about = fs.readFileSync(path.join(__dirname, 'aboutus.html'));
// const contact = fs.readFileSync(path.join(__dirname, 'contactus.html'));
// const  donate= fs.readFileSync(path.join(__dirname, 'donation.html'));
// const  event = fs.readFileSync(path.join(__dirname, 'events.html'));

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.statusCode = 200;
//   res.setHeader('content-Type', 'text/html');

//   // if (req.url === '/about') {
//   //   res.end(about);
//   // }
//   // else if (req.url === '/contact') {
//   //   res.end(contact);
//   // }
//   // else if (req.url === '/donate') {
//   //   res.end(donate);
//   // }
//   // else if (req.url === '/event') {
//   //   res.end(event);
//   // }

 
  
//   // else {
//     res.end(home);
//   // }
// });

// server.listen(port, () => {
//   console.log(`server running at port : ${port}`);
// });

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Read HTML files
const home = fs.readFileSync(path.join(__dirname, 'index.html'));
const about = fs.readFileSync(path.join(__dirname, 'aboutus.html'));
const contact = fs.readFileSync(path.join(__dirname, 'contactus.html'));
const donate = fs.readFileSync(path.join(__dirname, 'donation.html'));
const event = fs.readFileSync(path.join(__dirname, 'events.html'));
const volunteer = fs.readFileSync(path.join(__dirname, 'volunteers.html'));
const photo = fs.readFileSync(path.join(__dirname, 'photos.html'));
const project = fs.readFileSync(path.join(__dirname, 'projects.html'));
const video = fs.readFileSync(path.join(__dirname, 'videos.html'));

// Read CSS files
const homeCSS = fs.readFileSync(path.join(__dirname, 'home.css'));
const aboutCSS = fs.readFileSync(path.join(__dirname, 'style.css'));
const contactCSS = fs.readFileSync(path.join(__dirname, 'style2.css'));
const donateCSS = fs.readFileSync(path.join(__dirname, 'style3.css'));
const eventCSS = fs.readFileSync(path.join(__dirname, 'donation.css'));
const volunteerCSS = fs.readFileSync(path.join(__dirname, 'volunteer.css'));

// const ngo1Image = fs.readFileSync(path.join(__dirname, 'images', 'ngo1.jpg'));

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200;

  // Set appropriate content type based on the file type
  if (req.url === '/home.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(homeCSS);
  } else if (req.url === '/style.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(aboutCSS);
  } else if (req.url === '/style2.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(contactCSS);
  } else if (req.url === '/style3.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(donateCSS);
  } else if (req.url === '/donation.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(eventCSS);
  } 

  else if (req.url === '/volunteer.css') {
    res.setHeader('content-Type', 'text/css');
    res.end(volunteerCSS);
  } 
  
  
  else if (req.url === '/about' || req.url === '/aboutus.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(about);
  }
  else if (req.url === '/videos' || req.url === '/videos.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(video);
  }

  else if (req.url === '/photos' || req.url === '/photos.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(photo);
  }
  else if (req.url === '/projects' || req.url === '/projects.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(project);
  }
  
  else if (req.url === '/volunteers' || req.url === '/volunteers.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(volunteer);
  }
  
  else if (req.url === '/contact' || req.url === '/contactus.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(contact);
  } else if (req.url === '/donate' || req.url === '/donation.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(donate);
  } else if (req.url === '/event' || req.url === '/events.html') {
    res.setHeader('content-Type', 'text/html');
    res.end(event);
  }
  // else if (req.url === '/images/ngo1.jpg') {
  //   res.setHeader('content-Type', 'image/jpeg');
  //   res.end(ngo1Image);
  // }
  
  else {
    res.setHeader('content-Type', 'text/html');
    res.end(home);
  }
});


// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.statusCode = 200;

//   // Set appropriate content type based on the file type
//   if (req.url === '/home.css') {
//     res.setHeader('content-Type', 'text/css');
//     res.end(homeCSS);
//   }
//    else if (req.url === '/style.css') {
//     res.setHeader('content-Type', 'text/css');
//     res.end(aboutCSS);
//   } else if (req.url === '/style2.css') {
//     res.setHeader('content-Type', 'text/css');
//     res.end(contactCSS);
//   } else if (req.url === '/style3.css') {
//     res.setHeader('content-Type', 'text/css');
//     res.end(donateCSS);
//   } else if (req.url === '/donation.css') {
//     res.setHeader('content-Type', 'text/css');
//     res.end(eventCSS);
//   }
//   else if (req.url === '/about') {
//     res.setHeader('content-Type', 'text/html');
//     res.end(about);
//   } else if (req.url === '/contact') {
//     res.setHeader('content-Type', 'text/html');
//     res.end(contact);
//   } else if (req.url === '/donate') {
//     res.setHeader('content-Type', 'text/html');
//     res.end(donate);
//   } else if (req.url === '/event') {
//     res.setHeader('content-Type', 'text/html');
//     res.end(event);
//   } 
//   else {
//     res.setHeader('content-Type', 'text/html');
//     res.end(home);
//   }
// });

server.listen(port, () => {
  console.log(`server running at port : ${port}`);
});
