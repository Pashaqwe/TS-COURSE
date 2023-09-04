type User = {
  name: string;
  displayName: string | null;
};

/* Ниже мы утверждаем, что user это User и у него есть поле displayName  */
function assert(user: User): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("User has no displayName");
}

function logUserByDisplayName(user: User) {
  /* мы вынесли код выше, чтобы его переиспользовать */
  // if (!user.displayName) throw new Error("User has no displayName");
  assert(user);

  console.log(user.displayName.toUpperCase());
}
