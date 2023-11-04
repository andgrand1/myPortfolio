import Footer from "../footer";
export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p id="text1">Email:<em> andygranda63@gmail.com </em></p>
      <p id="text1">Address:<em> 123 West Any Street</em></p>
      <p id="text1">Phone Number:<em> 000-000-0000</em></p>
      <form action="mailto:email@email.com"method="post" encType="text/plain">
       <div class="form-group">
        <label id="text1">Your Name:</label>
        <input type="text" name="yourName"></input>
        </div>
        <div class="form-group">
        <label id="text1">Your Email:</label>
        <input type="email" name="yourEmail"></input>
        </div>
        <div class="form-group">
        <label id="text1">Your Message:</label>
        <textarea name="yourMessage" cols={"20"} rows={"5"}></textarea>
        </div>
        <input type="submit"></input>
      </form>
      <Footer />
    </div>
  );
}
