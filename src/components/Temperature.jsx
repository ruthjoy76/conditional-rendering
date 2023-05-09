function Temperature({ temperature }) {
  let message = '';

  if (temperature >= 90) {
    message = 'It is hot';
  } else if (temperature >= 70 && temperature < 90) {
    message = 'It is warm';
  } else {
    message = 'It is cool';
  }

  return <div>{message}</div>;
}

export default Temperature;