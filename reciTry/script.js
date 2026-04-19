// script.js
const btn = document.querySelector('#coreEntropy');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount++;
    
    // 1. Mutate the main element
    btn.innerText = clickCount > 10 ? "DECAYING..." : "INCREASE ENTROPY";
    btn.style.transform = `rotate(${clickCount * 15}deg) scale(${1 - clickCount * 0.02})`;
    btn.style.backgroundColor = `hsl(${clickCount * 20}, 70%, 50%)`;

    // 2. Create and append new chaotic elements
    const fragment = document.createElement('div');
    fragment.className = 'fragment';
    
    // Randomize content
    const glitches = ["ERROR", "{VOID}", "0x000", "NULL", "BYE"];
    fragment.innerText = glitches[Math.floor(Math.random() * glitches.length)];
    
    // Randomize initial position
    fragment.style.left = Math.random() * 90 + "vw";
    fragment.style.top = Math.random() * 90 + "vh";
    fragment.style.fontSize = (Math.random() * 2 + 0.5) + "rem";
    
    document.body.append(fragment);

    // 3. The Challenge: Global Mutation (querySelectorAll + forEach)
    if (clickCount > 5) {
        const allFragments = document.querySelectorAll('.fragment');
        
        allFragments.forEach((el) => {
            // Random drift
            const driftX = (Math.random() - 0.5) * 200;
            const driftY = (Math.random() - 0.5) * 200;
            
            el.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${Math.random() * 360}deg)`;
            el.style.opacity = Math.random();
            
            // Sub-mutation: Randomly changing text of old fragments
            if (Math.random() > 0.9) {
                el.innerText = "???";
                el.style.color = "cyan";
            }
        });
    }

    // 4. Final System Collapse
    if (clickCount > 30) {
        document.body.style.backgroundColor = "#ff0000";
        btn.style.opacity = "0";
        btn.disabled = true;
    }
});