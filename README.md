# Proof of Humanity Checker

A simple web application that checks if an Ethereum wallet address has Proof of Humanity (PoH) verification on the Linea network.

## Features

- Easy-to-use interface for checking wallet addresses
- Real-time verification using the Linea XP PoH API
- Visual feedback with notifications
- Ethereum address validation
- Loading indicators during API requests


## Usage

1. Enter an Ethereum wallet address in the input field
2. Click the "Check Address" button
3. View the verification result in a toast notification

## Technical Details

- **API Endpoint**: `https://linea-xp-poh-api.linea.build/poh/{address}`
- **Response Format**: JSON with `poh` and `isFlagged` properties
- **Technologies**: HTML, CSS, JavaScript (vanilla)
- **Dependencies**: None (no external libraries required)



