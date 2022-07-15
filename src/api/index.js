export const baseUrl =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user";

export async function getUsers(pageNumber) {
  const usersUrl = `${baseUrl}/${pageNumber}/${20}`;
  const response = await fetch(usersUrl);
  return await response.json();
}

export async function getUser(Id) {
  const userUrl = `${baseUrl}/${Id}`;
  const response = await fetch(userUrl);
  return await response.json();
}

export async function getUserFriends(Id, pageNumber) {
  const friendsUrl = `${baseUrl}/${Id}/friends/${pageNumber}/${20}`;
  const response = await fetch(friendsUrl);
  return await response.json();
}
