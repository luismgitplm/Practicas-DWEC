enum Roles {
  Admin = 1,
  User,
  Guest
}

var user: Roles = Roles.Admin; // 1
let roleName: string = Roles[user]; // "Admin"
