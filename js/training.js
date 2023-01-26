

class StringBuilder{
  constructor(initialValue){
    this.value = initialValue;
  }

  getValue(){
      return this.value;
  }

  padStart(str){
    this.value
  }

  padEnd(str){
    return '${this.value} + ${str}';
  }

  padBoth(str){
    return '${str} + ${this.value} + ${str}';
  }
}


// Change code above this line
const builder = new StringBuilder(".");

console.log(builder);
console.log(typeof(this.balue))

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="