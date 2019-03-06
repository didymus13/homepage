
import Butter from 'buttercms'
export default ({app}, inject) => {
  console.log(process.env.CMS_TOKEN)
  app.$butter = Butter(process.env.CMS_TOKEN)
}
