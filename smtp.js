  <script>
  function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username : '*************@gmail.com',
    Password : '**********************',
    To : 'destinataire@gmail.com',
    From : 'emetteur@aranacorp.com',
    Subject : 'Data from "+nom+"',
    Body : 'The sensor value is : "+String(analogRead(A0))+"',
    }).then(
      message => alert('mail sent successfully')
    );
  }
  </script>