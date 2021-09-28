const iftttKey = process.env.REACT_APP_IFTTT_KEY
const iftttApp = process.env.REACT_APP_IFTTT_APP

export const constants = {
  // this is generally the api endpoint that you will be using
  endpoint: process.env.REACT_APP_API,
  // key for storing auth token
  KEY_AUTH_TOKEN: "AUTH_KEY",
  // url for submitting the form to a ifttt action
  // iftttURL: `https://maker.ifttt.com/trigger/${iftttApp}/json/with/key/${iftttKey}`
  iftttURL: `https://prod-27.centralindia.logic.azure.com:443/workflows/129d701fc8c94b7fb577805282ba277a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LXaaCUNf4WO8jGoDHXpAaAax4Yug1n_pC70YoP5aoNw`
};