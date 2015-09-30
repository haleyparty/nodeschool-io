function loadUsers(userIds, load, done) {
  var usersLoaded = 0;
  var totalUsers = userIds.length;
  var users = [];

  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      usersLoaded++;
      if (usersLoaded === totalUsers) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
