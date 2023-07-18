const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   changed plane to html
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meels On Wheels</title>
      <link rel="stylesheet" href="responsive_projCss.css">
      <link rel="stylesheet" media="screen and (max-width: 944px)" href="phone.css">
  </head>
  
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="/logo food.jpg" alt="">
          </div>
          <ul>
              <li class="item"><a href="#home">Home</a></li>
              <li class="item"><a href="#services-cont">Services</a></li>
              <li class="item"><a href="#client-sec">About Us</a></li>
              <li class="item"><a href="#contact">Contact Us</a></li>
              <li class="item"><a href="#contact">Login/SignUp</a></li>
          </ul>
      </nav>
  
      <section id="home">
          <h1 class="primaryh">Welcome To Meels On Wheels</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minima doloribus nam, facilis deserunt
              quibusdam?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button class="btn">Order Now</button>
      </section>
  
      <section id="services-cont">
          <h1 class="primaryh center">Our Services</h1>
  
          <div id="services">
              <div class="box">
                  <img class="circle" src="/pasta.jpg" alt="">
                  <h2 class="secondaryh center">Italian Food</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste itaque aut
                      excepturi suscipit laboriosam dignissimos dolore, dolores ut ab necessitatibus illum porro! Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto asperiores hic?
                      Velit odit eos
                      eaque
                      magni adipisci maiores libero harum fuga. Quisquam perspiciatis tempore molestiae est doloribus
                      dicta
                      nobis eos officiis nam rerum?</p>
              </div>
              <div class="box">
                  <img src="/food delivery.png" alt="">
                  <h2 class="secondaryh center">Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste itaque aut
                      excepturi suscipit laboriosam dignissimos dolore, dolores ut ab necessitatibus illum porro! Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto asperiores hic?
                      Velit odit eos
                      eaque
                      magni adipisci maiores libero harum fuga. Quisquam perspiciatis tempore molestiae est doloribus
                      dicta
                      nobis eos officiis nam rerum?</p>
              </div>
              <div class="box">
                  <img class="circle" src="/noodles.jpg" alt="">
                  <h2 class="secondaryh center">Chinese Food</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste itaque aut
                      excepturi suscipit laboriosam dignissimos dolore, dolores ut ab necessitatibus illum porro! Lorem
                      ipsum, dolor sit amet consectetur adipisicing elit. Ab iusto asperiores hic?
                      Velit odit eos
                      eaque
                      magni adipisci maiores libero harum fuga. Quisquam perspiciatis tempore molestiae est doloribus
                      dicta
                      nobis eos officiis nam rerum?</p>
              </div>
          </div>
      </section>
  
      <section id="client-sec">
          <h1 class="primaryh center">Our clients</h1>
  
          <div class="client">
              <div class="cliend-item">
                  <img class="circle" src="/client2.avif" alt="">
              </div>
              <div class="cliend-item">
                  <img class="circle" src="/clientt3.avif" alt="">
              </div>
              <div class="cliend-item">
                  <img class="circle" src="/client4.avif" alt="">
              </div>
              <div class="cliend-item">
                  <img class="circle" src="/client5.jpg" alt="">
              </div>
          </div>
      </section>
  
      <section id="contact">
          <h1 class="primaryh center">Contact Us</h1>
          <div id="contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" placeholder="Enter Your Name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email: </label>
                      <input type="email" name="name" id="email" placeholder="Enter Your Name">
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone Number: </label>
                      <input type="number" name="name" id="phone" placeholder="Enter Your Name">
                  </div>
                  <div class="form-group">
                      <label for="message">Message: </label>
                      <textarea name="meaasge" id="meaasge" cols="30" rows="10"></textarea>
                  </div>
              </form>
          </div>
      </section>
  
      <footer>
          <div class="center">
              Copyright &copy; www.meelsonwheels.com. All rights reserverd | 2020
          </div>
      </footer>
  </body>
  
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});