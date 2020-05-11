require("./static/css/main.css")
require("./static/css/prism-custom.css")

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This site has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }