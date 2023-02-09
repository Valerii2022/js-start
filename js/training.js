let count = 0;
let message = '';

function cc(card) {
  // Змініть код лише під цим рядком

  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (
    card === 10 ||
    card === 'J' ||
    card === 'J' ||
    card === 'Q' ||
    card === 'K' ||
    card === 'A'
  ) {
    count -= 1;
  }

  if (count > 0) {
    message = count + ' Bet';
  } else {
    message = count + ' Hold';
  }

  return message;
  // Змініть код лише над цим рядком
}

cc(2);
cc(3);
cc(9);
cc('K');
cc('K');
cc('K');
cc('K');
cc(8);
cc('K');

console.log(message);
