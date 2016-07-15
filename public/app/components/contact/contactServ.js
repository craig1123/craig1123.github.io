angular.module('portfolio')
.service("contactServ", function ($http) {

  this.sendEmail = function (name, email, message) {
    return $http ({
      method: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': "fwn4CzWndF96EkxwAhBCBw",
        'message': {
                    'from_email': 'craigwalker1123@gmail.com',
                    'to': [{
                          'email': 'craigwalker1123@gmail.com',
                          'type': 'to'
                        }],
                    'autotext':'true',
                    'subject': name,
                    'text': 'Email:'+ ' ' + email + ' ' + 'Message:' + ' ' + message
                }
              }
        })
    }
})
