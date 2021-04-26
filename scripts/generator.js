function* counter() {
    yield "1"
    yield "2"
    yield "3"
    yield "4"
    yield "5"
    console.log("After Yield")
}

let genObj = counter()
console.log([...genObj])