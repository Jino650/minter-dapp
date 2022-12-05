require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "AAWOOM";
const description = "Now comes a new era. Welcome to the AAWOOM. The AAWOOM, Designed by Vellah Olufsen Has Finally been released to the world. The story these AAWOOM characters is just beginning. You are now departing together from the starting point in AAWOOM history. Join us on the journey in Metaverse.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background",   options: {
        blend: MODE.multiply,
        opacity: 5,
      }, },
      { name: "Body 2" },
      { name: "Special 2" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Eyes" },
      { name: "Eyewear" },
    ],
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Eyes" },
      { name: "Headwear" },
    ],
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Special 2" },
      { name: "Accessories" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Eyes" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Eyewear" },
    ],
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Eyes" },
      { name: "Eyewear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Special 2" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Headwear" },
    ],
  },
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Special 2" },
      { name: "Eyes" },
      { name: "Headwear" },
      { name: "Clothing" },
      { name: "Signature" },
    ],
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Special" },
      { name: "Accessories" },
      { name: "Eyes" }, 
      { name: "Headwear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 105,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Special 2" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Eyewear" }, 
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "The Other" },
      { name: "Eyes" },
      { name: "Signature" },
    ],
  },
  {
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Eyes" },
      { name: "Eyewear" },
    ],
  },
  {
    growEditionSizeTo: 830,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "The Other" },
      { name: "Accessories" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 1300,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "The Other" },
      { name: "Eyes" },
      { name: "Headwear" },
    ],
  },
  {
    growEditionSizeTo: 2300,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Signature" },
    ],
  },
  {
    growEditionSizeTo: 3100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Eyewear" },
    ],
  },
  {
    growEditionSizeTo: 4000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Eyes" },
      { name: "Eyewear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 4500,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "The Other" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Headwear" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "The Other" },
      { name: "Eyes" },
      { name: "Headwear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 6250,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Glitch Mode" },
      { name: "Eyes" },
      { name: "Headwear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 7500,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Eyes" },
      { name: "Headwear" },
      { name: "Clothing" },
      { name: "Signature" },
    ],
  },
  {
    growEditionSizeTo: 8000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 8950,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Glitch Mode" },
      { name: "Accessories" },
      { name: "Eyes" }, 
      { name: "Headwear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 9900,
    layersOrder: [
      { name: "Background" },
      { name: "Body 2" },
      { name: "Accessories" },
      { name: "Eyes" }, 
      { name: "Headwear" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Accessories" },
      { name: "Eyes" },
      { name: "Eyewear" }, 
      { name: "Clothing" },
      { name: "Signature" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2500,
  height: 2500,
  smoothing: false,
};

const extraMetadata = {
  Designer : "Vellah Olufsen", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'goerli'; // only goerli, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'AAWOOM';
const CONTRACT_SYMBOL = 'AAWOOM';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x0828eA0918C0F2763e1D8C6C519e1B872887d9dc'; // 이거 바꿔야 함
const TREASURY_ADDRESS = '0x0828eA0918C0F2763e1D8C6C519e1B872887d9dc'; // 꼭
const MAX_SUPPLY = 10; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. goerli = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 3; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-29T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-10-12T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 500; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x0828eA0918C0F2763e1D8C6C519e1B872887d9dc"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x0828eA0918C0F2763e1D8C6C519e1B872887d9dc"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = ""; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
