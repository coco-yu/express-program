var fortunes = [
  'qqqqqqqqqqqqqqqqq',
  'wwwwwwwwwwwwwwwww',
  'eeeeeeeeeeeeeeeee',
  'rrrrrrrrrrrrrrrrr',
  'ttttttttttttttttt'
];

exports.getFortune = function() {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  return randomFortune;
}