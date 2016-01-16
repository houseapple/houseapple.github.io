function getStylesheet() {
          var currentTime = new Date().getHours();
          if (0 <= currentTime&&currentTime < 9) {
           document.write("<link rel='stylesheet' href='../css/night.css' type='text/css'>");
          }
          if (18 <= currentTime&&currentTime <= 24) {
           document.write("<link rel='stylesheet' href='../css/night.css' type='text/css'>");
          }
    }

getStylesheet();
