// get(obj, ‘a.b.c’)

const zxc = {
  a: {
    b: {
      c: 'str'
    }
  }
}

function get(obj, str) {
  const arr = str.split('.')
  let curr = obj
  for(let item of arr) {
    if(!(item in curr)) {
      return curr = undefined
    }
    curr = curr[item]
  }

  return curr
}

console.log(get(zxc, 'a.b.c'))
console.log(get(zxc, 'g.b.c'))

