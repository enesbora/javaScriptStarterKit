export default class UserService {
  add(user) {
    console.log("kullanici eklendi" + user);
  }

  list() {
    console.log("kullanicilar listelendi");
  }

  getById() {
    console.log("kullanici id ile cagirildi");
  }
}
