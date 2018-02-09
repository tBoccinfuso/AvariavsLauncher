(function () {
      
    const remote = require('electron').remote; 
    const nrc = require('node-run-cmd');
    const shell = require('electron').shell;

    function init() {      
      document.getElementById("close-btn").addEventListener("click", function (e) {
        const window = remote.getCurrentWindow();
        window.close();
      }); 

      
      
    }; 
    
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init(); 
      }
    };

    document.getElementById("launch").addEventListener('click', function(){      
      nrc.run('launch.bat');
      setTimeout(function(){
        window.close();
      },2000);
    });

    document.getElementById("jm").addEventListener('click', function(){      
      nrc.run('jm.bat');
    });

    document.getElementById("disc").addEventListener('click', function(){      
      nrc.run('disc.bat');
    });
    document.getElementById("twit").addEventListener('click', function(){      
      nrc.run('twit.bat');
    });
    document.getElementById("red").addEventListener('click', function(){      
      nrc.run('red.bat');
    });
    document.getElementById("avariavs").addEventListener('click', function(){      
      nrc.run('av.bat');
    });
})();
