import signUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  const prom1 = signUser(firstName, lastName);
  const prom2 = uploadPhoto(fileName);
  const promises = [prom1, prom2];

  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        arr.push({
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : String(result.reason),
        });
      });
      console.log(arr);
      return arr;
    });
}
