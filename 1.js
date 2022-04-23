let user = {
  name: "",
  family: "",
  addresses: [],
  workInfo: {
    name: "",
    category: {
      id: 1,
      name: "",
    },
  },
};
function UserManager() {
  return {
    add(address) {
      user = { ...user, addresses: [...user.addresses, address] };
    },
    remove(address) {
      let index = user.addresses.indexOf(address);
      if (index !== -1) {
        user = {
          ...user,
          addresses: [
            ...user.addresses.slice(0, user.indexOf(address)),
            ...user.addresses.slice(user.indexOf(address) + 1),
          ],
        };
      }
    },
    changeName(name, family) {
      user = { ...user, name: name, family: family };
    },
    workInfoName(name) {
      user = { ...user, workInfo: { ...user.workInfo, name: name } };
    },
    categoryName(name) {
      user = {
        ...user,
        workInfo: { category: { ...user.workInfo.category, name: name } },
      };
    },

    workInfo(workInfo) {
      user = { ...user, workInfo: { ...workInfo } };
    },
    params(key, value) {
      switch (key) {
        case add:
          this.add(value);
          break;
        case remove:
          this.remove(value);
          break;
        case changeName:
          this.changeName(value);
          break;
        case workInfoName:
          this.workInfoName(value);
          break;
      }
    },
  };
}
let info = new UserManager();
console.log(info.add("tehran"));
console.log(info.remove("tehran"));
console.log(info.changeName("ali", "hosseini"));
