import getData from "./getData"

export default {
  async get() {
   const res = await getData('https://www.reddit.com/r/reactjs.json')
   return res
  },
  // update() {},
  // store() {},
  // destroy() {},
}
