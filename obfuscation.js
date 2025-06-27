    const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:',.<>/?0123456789äöüÄÖÜß";

    function startObfuscation(element) {
      const original = element.textContent;
      setInterval(() => {
        let gibberish = "";
        for (let i = 0; i < original.length; i++) {
          gibberish += (original[i] === " ")
            ? " "
            : letters[Math.floor(Math.random() * letters.length)];
        }
        element.textContent = gibberish;
      }, 30);
    }

    const allObfuscated = document.querySelectorAll('.obfuscated');
    allObfuscated.forEach(el => startObfuscation(el));