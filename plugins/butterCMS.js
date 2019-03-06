
import Butter from 'buttercms'
export default ({app}, inject) => {
  app.$butter = Butter(process.env.CMS_TOKEN)
}
