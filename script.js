// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// To make a sword:
// 1. Check if the forge has at least 30 heat.
// 2. If yes, subtract 30 from the heat and add 1 to the sword count.
// 3. If no, leave the numbers unchanged and show a message explaining more heat is needed.
// 4. Always update the page display at the end.

// 1. Select the forge, heat, sword count, status, image, and message elements.
const forge = document.getElementById('forge');
const forgeImage = document.getElementById('forge-image');
const forgeStatus = document.getElementById('forge-status');
const heatValue = document.getElementById('heat-value');
const swordCount = document.getElementById('sword-count');
const actionMessage = document.getElementById('action-message');

// 2. Create the two state variables: heat and swords made.
let heat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return 'Too cold';
  } else if (heatValue < 70) {
    return 'Ready to forge';
  } else {
    return 'Roaring fire';
  }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {
  // Update text content
  heatValue.textContent = heat;
  swordCount.textContent = swordsMade;

  // Get current status
  const status = getForgeStatus(heat);
  forgeStatus.textContent = status;

  // Remove previous status classes so only one remains
  forge.classList.remove('is-cold', 'is-ready', 'is-roaring');

  // Apply matching class, image, and alt text based on status
  if (status === 'Too cold') {
    forge.classList.add('is-cold');
    forgeImage.src = 'assets/forge-cold.svg';
    forgeImage.alt = 'A stone forge with dark coals and no flames';
  } else if (status === 'Ready to forge') {
    forge.classList.add('is-ready');
    forgeImage.src = 'assets/forge-ready.svg';
    forgeImage.alt = 'A stone forge with a small orange fire';
  } else if (status === 'Roaring fire') {
    forge.classList.add('is-roaring');
    forgeImage.src = 'assets/forge-roaring.svg';
    forgeImage.alt = 'A stone forge with tall bright flames and sparks';
  }
}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
  heat = 20;
  swordsMade = 0;
  actionMessage.textContent = 'Welcome to the forge. Add heat to begin.';
  updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
  heat += amount;
  if (heat > 100) {
    heat = 100;
  }
  actionMessage.textContent = `Heating complete. The forge is at ${heat} heat.`;
  updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
  if (heat >= 30) {
    heat -= 30;
    swordsMade++;
    actionMessage.textContent = `Success! Sword made. The forge is at ${heat} heat.`;
  } else {
    actionMessage.textContent = 'Not enough heat to make a sword. Add more heat.';
  }
  updateForge();
}

// 8. Call resetForge() once to start the game.
resetForge();