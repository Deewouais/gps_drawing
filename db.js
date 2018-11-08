let base = "https://api.mlab.com/api/1/databases/"
let apiKey = "vdV5hCiw5CAgN_qzxzLV07zoDq02eBzJ"
let database = "drawing-db"

class DB {

    get(f) {
        console.log('GET')
        let url = base + database + "/collections/paths?apiKey=" + apiKey
        let request = new XMLHttpRequest()
        request.open('GET', url)
        request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            f(JSON.parse(this.response))
          } else {
            console.log(this.status)
            console.log(this.response)
          }
        }
        request.onerror = function() {
            console.log(this.status)
            console.log(this.response)
        }
        request.send()
    }

    insert(path) {
        console.log("INSERT")
        let url = base + database + "/collections/paths?apiKey=" + apiKey
        let request = new XMLHttpRequest()
        request.open('POST', url)
        request.setRequestHeader('Content-Type', 'application/json')
        request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            console.log(this.response)
          } else {
            console.log(this.status)
            console.log(this.response)
          }
        }
        request.onerror = function() {
            console.log(this.status)
            console.log(this.response)
        }
        let encoded = JSON.stringify({path: path})
        console.log(encoded)
        request.send(encoded)
    }

}

let db = new DB()