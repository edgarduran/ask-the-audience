var socket = io();

var connectionCount = document.getElementById('connection-count');
var messageText = document.getElementById('message');
var buttons = document.querySelectorAll('#voting-choices button');
var voteTally = document.getElementById('vote-totals')

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected users: ' + count;
});

socket.on('statusMessage', function (message) {
  messageText.innerText = message;
});

socket.on('youHaveVotedMessage', function (message) {
  console.log(message);
});

socket.on('voteCount', function (voteCount) {
  console.log(voteCount);
  voteTally.innerText = "A" + voteCount.A +
                        "B" + voteCount.B +
                        "C" + voteCount.C +
                        "D" + voteCount.D;
});
