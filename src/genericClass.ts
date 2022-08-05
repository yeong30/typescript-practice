//일부타입(object)은 removeItem이 정상작동하지않으므로 제약 조건 추가
class DataStorage<T extends string | number> {
  storage: Array<T> = [];

  addItem(item: T) {
    this.storage.push(item);
  }
  removeItem(item: T) {
    this.storage.splice(this.storage.indexOf(item), 1);
  }

  printItem() {
    console.log(this.storage);
  }
}

const storage = new DataStorage<string>();

storage.addItem("het");
storage.addItem("john");
storage.addItem("elly");

storage.removeItem("elly");

storage.printItem();
