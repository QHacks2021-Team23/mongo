db.createUser({
  user: "App",
  pwd: "Password!",
  roles: [
    {
      role: "readWrite",
      db: "emailApp",
    },
  ],
});
